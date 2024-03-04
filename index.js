// Sample data - an array of student objects
const students = [
    { id: 1, name: 'Alice', grade: 85 },
    { id: 2, name: 'Bob', grade: 92 },
    { id: 3, name: 'Charlie', grade: 78 },
    { id: 4, name: 'David', grade: 95 },
  ];
  
  // Helper function to find a student by their ID
  function findStudentById(studentArray, studentId) {
    if (!Array.isArray(studentArray) || studentArray.length === 0 || typeof studentId !== 'number') {
      throw new Error("Invalid inputs. Student array must be a non-empty array, and studentId must be a number");
    }
  
    return studentArray.find(student => student.id === studentId);
  }
  
  // Helper function to calculate the average grade of students
  function calculateAverageGrade(studentArray) {
    if (!Array.isArray(studentArray) || studentArray.length === 0) {
      throw new Error("Input must be a non-empty array of students");
    }
  
    const totalGrade = studentArray.reduce((sum, student) => sum + student.grade, 0);
    return totalGrade / studentArray.length;
  }
  
  // Demo using the helper functions
  try {
    const studentIdToFind = 3;
    const foundStudent = findStudentById(students, studentIdToFind);
    console.log(`Student with ID ${studentIdToFind}:`, foundStudent);
  
    const averageGrade = calculateAverageGrade(students);
    console.log("Average Grade of Students:", averageGrade.toFixed(2));
  } catch (error) {
    console.error("Error:", error.message);
  }
  