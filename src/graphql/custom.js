/* Custom Queries and Mutations */

/************************
 * MUTATIONS
 ************************/

/**
 * CLASS MUTATIONS
 */
export const addClassMutation = /* GraphQL */ `
    mutation AddClassMutation(
        $input: CreateClassInput!
        $condition: ModelClassConditionInput
    ) {
        createClass(input: $input, condition: $condition) {
            id
        }
    }
`;
export const updateClassMutation =  `
    mutation UpdateClassMutation(
        $input: UpdateClassInput!
        $condition: ModelClassConditionInput
    ) {
        updateClass(input: $input, condition: $condition) {
            id
            academicYear {
                id
                year
                isActive
            }
            quarter
            classNumber
            className
            status
            tuition
            fees
            awarded
            voucher
            undetermined
            invoice
            paid
            paidDate
            reimbursed
            reimbursedDate
        }
    }
`

/**
 * DOCUMENT MUTATIONS
 */
export const addDocumentMutation =  `
    mutation CreateDocument(
        $input: CreateDocumentInput!
        $condition: ModelDocumentConditionInput
    ) {
        createDocument(input: $input, condition: $condition) {
            id
            title
            link
        }
    }
`

/**
 * STUDENT MUTATIONS
 */
export const addStudentMutation =  `
    mutation CreateStudent(
        $input: CreateStudentInput!
        $condition: ModelStudentConditionInput
    ) {
        createStudent(input: $input, condition: $condition) {
            id
        }
    }
`
export const updateStudentMutation =  `
    mutation UpdateStudent(
        $input: UpdateStudentInput!
        $condition: ModelStudentConditionInput
    ) {
        updateStudent(input: $input, condition: $condition) {
            id
        }
    }
`
export const deleteStudentMutation = `
    mutation DeleteStudent(
        $input: DeleteStudentInput!
        $condition: ModelStudentConditionInput
    ) {
        deleteStudent(input: $input, condition: $condition) {
            id
        }
    }
`

/**
 * USER MUTATIONS
 */
export const addUserMutation =  `
    mutation CreateUser(
        $input: CreateUserInput!
        $condition: ModelUserConditionInput
    ) {
        createUser(input: $input, condition: $condition) {
            firstName,
            lastName
            email,
            password
            admin
        }
    }
`
export const updateUserMutation =  `
    mutation UpdateUser(
        $input: UpdateUserInput!
        $condition: ModelUserConditionInput
    ) {
        updateUser(input: $input, condition: $condition) {
            token
        }
    }
`
// Update user password
export const deleteUserMutation = `
    mutation DeleteUser(
        $input: DeleteUserInput!
        $condition: ModelUserConditionInput
    ) {
        deleteUser(input: $input, condition: $condition) {
            id
        }
    }
`

/**
 * NOTE MUTATIONS
 */
export const newNoteMutation = `
    mutation CreateNote(
        $input: CreateNoteInput!
        $condition: ModelNoteConditionInput
    ) {
        createNote(input: $input, condition: $condition) {
            note
            createdDate
        }
    }
`

/**
 * TASK MUTATIONS
 */
export const addTaskMutation =  `
    mutation($flag: Boolean, $userId: ID!, $document: String, $studentId: ID!, $assignedDate: String!, $dueDate: String!, $completed: Boolean, $completedDate: String, $detail: String) {
        addTask(flag: $flag, userId: $userId, document: $document, studentId: $studentId, assignedDate: $assignedDate, dueDate: $dueDate, completed: $completed, completedDate: $completedDate, detail: $detail) {
            flag
            document
            assignedDate
            dueDate
            completed
            completedDate
            detail
        }
    }
`
export const updateTaskMutation =  `
    mutation UpdateNote(
        $input: UpdateNoteInput!
        $condition: ModelNoteConditionInput
    ) {
        updateNote(input: $input, condition: $condition) {
            flag
            document
            assignedDate
            dueDate
            completed
            completedDate
            detail
        }
    }
`
// Complete task is wrapped up in update
export const deleteTaskMutation =  `
    mutation DeleteTask(
        $input: DeleteTaskInput!
        $condition: ModelTaskConditionInput
    ) {
        deleteTask(input: $input, condition: $condition) {
            detail
        }
    }
`
/**
 * QUICK LINK MUTATIONS
 */
export const addQuickLinkMutation = `
    mutation CreateQuickLink(
        $input: CreateQuickLinkInput!
        $condition: ModelQuickLinkConditionInput
    ) {
        createQuickLink(input: $input, condition: $condition) {
            title
            link
        }
    }
`
export const deleteQuickLinkMutation = `
    mutation DeleteQuickLink(
        $input: DeleteQuickLinkInput!
        $condition: ModelQuickLinkConditionInput
    ) {
        deleteQuickLink(input: $input, condition: $condition) {
            title
        }
    }
`


/************************
 * QUERIES
 ************************/

/**
 * Tasks
 */
export const getUserTasksQuery = `
    query ListTasks(
        $filter: ModelTaskFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            flag
            document
            student{
                firstName
                lastName
                studentId
            }
            dueDate
        }
    }
`
export const getStudentTasks = `
    query ListTasks(
        $filter: ModelTaskFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            flag
            user {
                id
                firstName
                avatar
                color
            }
            document
            assignedDate
            dueDate
            completed
            completedDate
            detail
        }
    }
`
export const getTasksQuery = `
    query ListTasks(
        $filter: ModelTaskFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            flag
            user {
                firstName
                avatar
                color
                id
            }
            document
            student {
                id
                firstName
                lastName
                docNum
                ubbId
            }
            assignedDate
            dueDate
            completed
            completedDate
            detail
        }
    }
`

/**
 * Academic Years
 */
export const getActiveAcademicYearQuery = `
    query GetActiveAcademicYear(
        $filter: ModelAcademicYearFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listAcademicYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            year
        }
    }
`
export const getAllAcademicYearsQuery = `
    query getAllAcademicYearsQuery(
        $filter: ModelAcademicYearFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listAcademicYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            year
            isActive
        }
    }
`

/**
 * Students
 */
// Get all currently enrolled students
export const getStudentsQuery = `
    query ListStudents(
        $filter: ModelStudentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            lastName
            firstName
            docNum
            ubbId
            academicYearStatus {
                financialAidStatus 
                studentStatus 
                academicYear {
                    year 
                }
            }
            notes {
                bookmark
            }
            tasks {
                flag
            }
        }
    }
`
// This query made two requests; one for the current year and the other for student data.
// I'm only doing the student data, but I should be able to use a previous query for the year data.
// Make sure this is reflected in "StudentStatusCard.js" where this was called. Year fields: year; isActive;
export const getStudentStatus = `
    query ListStudents(
        $filter: ModelStudentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            academicYearStatus {
                financialAidStatus
            }
        }
    }
`
// Get all students, regardless of enrollemnt
export const getAllStudentsQuery = `
    query ListStudents(
        $filter: ModelStudentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            firstName
            lastName
            docNum
        }
    }
`
export const getStudentInfoQuery = `
    query GetStudentInfoQuery($id: ID!) {
        getStudent(id: $id) {
            id
            firstName
            lastName
            dateOfBirth
            ubbId
            docNum
            location {
                name
                asOfDate
            }
            runwayCohort
            race
            gpa {
                value
                asOfDate
            }
            fafsaReceived
            sentToAccounting
            readyToAward
            newStudent
            archiveStudent
            academicYearStatus {
            academicYear {
                isActive
            }
            financialAidStatus
            studentStatus
            }
            documents {
                id
                title
                link
            }
        }
    }
`

/**
 * Users
 */
export const getUsersQuery = `
    query GetUsersQuery(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {    
                id
                avatar
                firstName
                lastName
                email
                admin
                quickLinks {
                    id
                    title
                    link
                }
            }
        }
    }
`
export const getUsersSimplified = `
    query GetUsersSimplified(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            firstName
            lastName
        }
    }
`

/**
 * Documents
 */
export const getDocumentsQuery = `
    query getDocumentsQuery(
        $filter: ModelDocumentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
            title
            link
        }
    }
`

/**
 * Documents
 */
export const getNotesQuery = `
    query ListNotes(
        $filter: ModelNoteFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
            user {
                firstName
                avatar
                color
            }
            note
            createdDate
            bookmark
        }
    }
`

/**
 * Classes
 */
export const getStudentClassesQuery = `
    query GetStudentClassesQuery(
        $filter: ModelClassFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
            id
            academicYear {
                id
                year
                isActive
            }
            quarter
            classNumber
            className
            status
            tuition
            fees
            awarded
            voucher
            undetermined
            invoice
            paid
            paidDate
            reimbursed
            reimbursedDate
        }
    }
`

/**
 * QuickLinks
 */
export const getUserQLQuery = `
    query GetUserQLQuery($id: ID!) {
        getUser(id: $id) {
            quickLinks {
                title
                link
            }
        }
    }
`

/**
 * Financial Reports
 */
// Similar sitch as before. Unique classes query with standard ActieveAcademicYear query.
// Make sure to add the latter query in to wherever this query is called.
export const getFinancialReportQuery = `
    query GetFinancialReportsQuery(
        $filter: ModelClassFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
            quarter
            awarded
            voucher
            undetermined
        }
    }
`

