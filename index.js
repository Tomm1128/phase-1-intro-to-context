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

const createTimeInEvent = (employeeRecord, timeIn) => {
  const timeInArray = timeIn.split(" ")
  const [inputDate, inputTime] = timeInArray
  const timeInObj = {
    type: "TimeIn",
    date: inputDate,
    hour: parseInt(inputTime)
  }
  
  employeeRecord.timeInEvents.push(timeInObj)
  return employeeRecord
}

const createTimeOutEvent = (employeeRecord, timeOut) => {
  const timeOutArray = timeOut.split(" ")
  const [inputDate, inputTime] = timeOutArray
  const timeOutObj = {
    type: "TimeOut",
    date: inputDate,
    hour: parseInt(inputTime)
  }
  
  employeeRecord.timeOutEvents.push(timeOutObj)
  return employeeRecord
}

const testRecord = {
  firstName: 'Julius',
  familyName: 'Caesar',
  title: 'General',
  payPerHour: 1000,
  timeInEvents: [ { type: 'TimeIn', date: '0044-03-15', hour: 900 }, { type: 'TimeIn', date: '0044-03-15', hour: 1200 } ],
  timeOutEvents: [ { type: 'TimeOut', date: '0044-03-15', hour: 1100 }, { type: 'TimeOut', date: '0044-03-15', hour: 1500 }  ]
}

const testTime = "0044-03-15"


const hoursWorkedOnDate = (employeeRecord, lookUpDate) => {
  const timeInArray = employeeRecord.timeInEvents
  const timeOutArray = employeeRecord.timeOutEvents
  let timeInTime = 0
  let timeOutTime = 0
  timeInArray.forEach(element => {
    if (element.date === lookUpDate){
      timeInTime += element.hour
    }
  })
  timeOutArray.forEach(element => {
    if (element.date === lookUpDate){
      timeOutTime += element.hour
    }
  })
  return (timeOutTime - timeInTime) / 100
}

const wagesEarnedOnDate = (employeeRecord, lookUpDate) => {
  let hoursWorked = hoursWorkedOnDate(employeeRecord, lookUpDate)
  let pay = employeeRecord.payPerHour

  return hoursWorked * pay
}

const allWagesFor = (employeeRecord) => {

}

allWagesFor(testRecord)
