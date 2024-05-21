// Your code here
const createEmployeeRecord = (employeeArray) => {
  const [name, lastName, profession, pay] = employeeArray.map((item) => item)
  const employeeRecord = {}

  employeeRecord.firstName = name
  employeeRecord.familyName = lastName
  employeeRecord.title = profession
  employeeRecord.payPerHour = pay
  employeeRecord.timeInEvents = []
  employeeRecord.timeOutEvents = []

  return employeeRecord
}

const createEmployeeRecords = (arrayOfEmployees) => {
  let employeesRecords = []
  arrayOfEmployees.map((item) => {
    employeesRecords.push(createEmployeeRecord(item))
  })
  return employeesRecords
}
