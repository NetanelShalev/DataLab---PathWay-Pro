import React from 'react';
import './App.css';
import RecommendCourses from './components/recommendCourses';
import RecommendCertifications from './components/recommendCertifications';
import SimilarPersons from './components/similarPersons';
import Employee from './components/employee';
import { data } from './dataFile';
import { FaBook } from 'react-icons/fa';
import PromotionChances from './components/promotionChances';
import PromotionSuggestion from './components/promotionSuggestion';

function App() {
  const employees = data.employees;
  const [selectedEmployee, setSelectedEmployee] = React.useState(employees[0]);
  const [careerPath, setCareerPath] = React.useState('new_job'); // Add this state

  return (
    <div className="App">
      <div style={{ margin: '20px' }}>
        <select
          value={selectedEmployee.employee_id}
          onChange={(e) => {
            const employee = employees.find(emp => emp.employee_id === e.target.value);
            if (employee) setSelectedEmployee(employee);
          }}
          style={{ padding: '5px', fontSize: '25px', marginRight: '10px' }}
        >
          {employees.map(emp => (
            <option key={emp.employee_id} value={emp.employee_id}>
              {emp.employee_id}
            </option>
          ))}
        </select>

        <select
          value={careerPath}
          onChange={(e) => setCareerPath(e.target.value)}
          style={{ padding: '5px', fontSize: '25px' }}
        >
          <option value="new_job">New Job</option>
          <option value="promotion">Promotion</option>
        </select>
      </div>

      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ 
            fontSize: '48px', 
            margin: '20px',
            color: '#2d3436',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            letterSpacing: '2px',
            background: 'linear-gradient(45deg, #6c5ce7, #a8e6cf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '10px'
            }}>
            Pathway Pro
            </h1>

            <Employee
              name={selectedEmployee.name}
              company={selectedEmployee.company_name}
              jobTitle={selectedEmployee.position}
              degreeLevel={selectedEmployee.degree_level}
              degreeType={selectedEmployee.degree_type}
            />

            {careerPath === 'new_job' && (
              <>
                <SimilarPersons persons={selectedEmployee.new_job?.similarPersons || []} />
                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px', marginLeft: '-80px' }}>
                  <h3>Industry {selectedEmployee.position} Role</h3>
                  <h3> From {selectedEmployee.company_name} {selectedEmployee.field} Field</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <RecommendCourses
                    courses={((selectedEmployee.new_job?.courses_by_position) || [])
                      .map(course => ({ name: course, icon: FaBook }))}
                    />
                    <RecommendCertifications
                    certifications={((selectedEmployee.new_job?.certifications_by_position) || [])
                      .map(cert => ({ name: cert, icon: FaBook }))}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <RecommendCourses
                    courses={((selectedEmployee.new_job?.courses_by_field) || [])
                      .map(course => ({ name: course, icon: FaBook }))}
                    />
                    <RecommendCertifications
                    certifications={((selectedEmployee.new_job?.certifications_by_field) || [])
                      .map(cert => ({ name: cert, icon: FaBook }))}
                    />
                  </div>
                  </div>
                </div>
              </>
            )}
            {careerPath === 'promotion' && (
              <>
                <SimilarPersons persons={selectedEmployee.promotion?.Mentors || []} />
                <PromotionChances chance={selectedEmployee.promotion?.chances} />
                <PromotionSuggestion suggestion={selectedEmployee.promotion?.Suggestions} />
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;