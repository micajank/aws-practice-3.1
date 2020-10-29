/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAcademicYearStatus = /* GraphQL */ `
  query GetAcademicYearStatus($id: ID!) {
    getAcademicYearStatus(id: $id) {
      id
      academicYear {
        id
        year
        isActive
        createdAt
        updatedAt
      }
      financialAidStatus
      studentStatus
      createdAt
      updatedAt
    }
  }
`;
export const listAcademicYearStatuss = /* GraphQL */ `
  query ListAcademicYearStatuss(
    $filter: ModelAcademicYearStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAcademicYearStatuss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        academicYear {
          id
          year
          isActive
          createdAt
          updatedAt
        }
        financialAidStatus
        studentStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAcademicYearStatusInput = /* GraphQL */ `
  query GetAcademicYearStatusInput($id: ID!) {
    getAcademicYearStatusInput(id: $id) {
      id
      academicYearId
      financialAidStatus
      studentStatus
      createdAt
      updatedAt
    }
  }
`;
export const listAcademicYearStatusInputs = /* GraphQL */ `
  query ListAcademicYearStatusInputs(
    $filter: ModelAcademicYearStatusInputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAcademicYearStatusInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        academicYearId
        financialAidStatus
        studentStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAcademicYear = /* GraphQL */ `
  query GetAcademicYear($id: ID!) {
    getAcademicYear(id: $id) {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listAcademicYears = /* GraphQL */ `
  query ListAcademicYears(
    $filter: ModelAcademicYearFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAcademicYears(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      academicYear {
        id
        year
        isActive
        createdAt
        updatedAt
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
      student {
        id
        firstName
        lastName
        dateOfBirth
        ubbId
        docNum
        location {
          id
          name
          asOfDate
          createdAt
          updatedAt
        }
        runwayCohort
        gpa {
          id
          value
          asOfDate
          createdAt
          updatedAt
        }
        race
        fafsaReceived
        sentToAccounting
        readyToAward
        newStudent
        archiveStudent
        academicYearStatus {
          id
          financialAidStatus
          studentStatus
          createdAt
          updatedAt
        }
        classes {
          id
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
          createdAt
          updatedAt
        }
        documents {
          id
          title
          link
          createdAt
          updatedAt
        }
        tasks {
          id
          flag
          document
          assignedDate
          dueDate
          completed
          completedDate
          detail
          createdAt
          updatedAt
        }
        notes {
          id
          note
          createdDate
          bookmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        academicYear {
          id
          year
          isActive
          createdAt
          updatedAt
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
        student {
          id
          firstName
          lastName
          dateOfBirth
          ubbId
          docNum
          runwayCohort
          race
          fafsaReceived
          sentToAccounting
          readyToAward
          newStudent
          archiveStudent
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      title
      link
      student {
        id
        firstName
        lastName
        dateOfBirth
        ubbId
        docNum
        location {
          id
          name
          asOfDate
          createdAt
          updatedAt
        }
        runwayCohort
        gpa {
          id
          value
          asOfDate
          createdAt
          updatedAt
        }
        race
        fafsaReceived
        sentToAccounting
        readyToAward
        newStudent
        archiveStudent
        academicYearStatus {
          id
          financialAidStatus
          studentStatus
          createdAt
          updatedAt
        }
        classes {
          id
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
          createdAt
          updatedAt
        }
        documents {
          id
          title
          link
          createdAt
          updatedAt
        }
        tasks {
          id
          flag
          document
          assignedDate
          dueDate
          completed
          completedDate
          detail
          createdAt
          updatedAt
        }
        notes {
          id
          note
          createdDate
          bookmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        link
        student {
          id
          firstName
          lastName
          dateOfBirth
          ubbId
          docNum
          runwayCohort
          race
          fafsaReceived
          sentToAccounting
          readyToAward
          newStudent
          archiveStudent
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      user {
        id
        firstName
        lastName
        email
        admin
        avatar
        color
        quickLinks {
          id
          title
          link
          createdAt
          updatedAt
        }
        tasks {
          id
          flag
          document
          assignedDate
          dueDate
          completed
          completedDate
          detail
          createdAt
          updatedAt
        }
        notes {
          id
          note
          createdDate
          bookmark
          createdAt
          updatedAt
        }
        token
        createdAt
        updatedAt
      }
      note
      createdDate
      bookmark
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          firstName
          lastName
          email
          admin
          avatar
          color
          token
          createdAt
          updatedAt
        }
        note
        createdDate
        bookmark
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuickLink = /* GraphQL */ `
  query GetQuickLink($id: ID!) {
    getQuickLink(id: $id) {
      id
      title
      link
      createdAt
      updatedAt
    }
  }
`;
export const listQuickLinks = /* GraphQL */ `
  query ListQuickLinks(
    $filter: ModelQuickLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuickLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        link
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      firstName
      lastName
      dateOfBirth
      ubbId
      docNum
      location {
        id
        name
        asOfDate
        createdAt
        updatedAt
      }
      runwayCohort
      gpa {
        id
        value
        asOfDate
        createdAt
        updatedAt
      }
      race
      fafsaReceived
      sentToAccounting
      readyToAward
      newStudent
      archiveStudent
      academicYearStatus {
        id
        academicYear {
          id
          year
          isActive
          createdAt
          updatedAt
        }
        financialAidStatus
        studentStatus
        createdAt
        updatedAt
      }
      classes {
        id
        academicYear {
          id
          year
          isActive
          createdAt
          updatedAt
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
        student {
          id
          firstName
          lastName
          dateOfBirth
          ubbId
          docNum
          runwayCohort
          race
          fafsaReceived
          sentToAccounting
          readyToAward
          newStudent
          archiveStudent
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      documents {
        id
        title
        link
        student {
          id
          firstName
          lastName
          dateOfBirth
          ubbId
          docNum
          runwayCohort
          race
          fafsaReceived
          sentToAccounting
          readyToAward
          newStudent
          archiveStudent
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      tasks {
        id
        flag
        user {
          id
          firstName
          lastName
          email
          admin
          avatar
          color
          token
          createdAt
          updatedAt
        }
        document
        student {
          id
          firstName
          lastName
          dateOfBirth
          ubbId
          docNum
          runwayCohort
          race
          fafsaReceived
          sentToAccounting
          readyToAward
          newStudent
          archiveStudent
          createdAt
          updatedAt
        }
        assignedDate
        dueDate
        completed
        completedDate
        detail
        createdAt
        updatedAt
      }
      notes {
        id
        user {
          id
          firstName
          lastName
          email
          admin
          avatar
          color
          token
          createdAt
          updatedAt
        }
        note
        createdDate
        bookmark
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        dateOfBirth
        ubbId
        docNum
        location {
          id
          name
          asOfDate
          createdAt
          updatedAt
        }
        runwayCohort
        gpa {
          id
          value
          asOfDate
          createdAt
          updatedAt
        }
        race
        fafsaReceived
        sentToAccounting
        readyToAward
        newStudent
        archiveStudent
        academicYearStatus {
          id
          financialAidStatus
          studentStatus
          createdAt
          updatedAt
        }
        classes {
          id
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
          createdAt
          updatedAt
        }
        documents {
          id
          title
          link
          createdAt
          updatedAt
        }
        tasks {
          id
          flag
          document
          assignedDate
          dueDate
          completed
          completedDate
          detail
          createdAt
          updatedAt
        }
        notes {
          id
          note
          createdDate
          bookmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentGpaInput = /* GraphQL */ `
  query GetStudentGpaInput($id: ID!) {
    getStudentGpaInput(id: $id) {
      id
      value
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const listStudentGpaInputs = /* GraphQL */ `
  query ListStudentGpaInputs(
    $filter: ModelStudentGpaInputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentGpaInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        value
        asOfDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentLocationInput = /* GraphQL */ `
  query GetStudentLocationInput($id: ID!) {
    getStudentLocationInput(id: $id) {
      id
      name
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const listStudentLocationInputs = /* GraphQL */ `
  query ListStudentLocationInputs(
    $filter: ModelStudentLocationInputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentLocationInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        asOfDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudentStatus = /* GraphQL */ `
  query GetStudentStatus($id: ID!) {
    getStudentStatus(id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const listStudentStatuss = /* GraphQL */ `
  query ListStudentStatuss(
    $filter: ModelStudentStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      flag
      user {
        id
        firstName
        lastName
        email
        admin
        avatar
        color
        quickLinks {
          id
          title
          link
          createdAt
          updatedAt
        }
        tasks {
          id
          flag
          document
          assignedDate
          dueDate
          completed
          completedDate
          detail
          createdAt
          updatedAt
        }
        notes {
          id
          note
          createdDate
          bookmark
          createdAt
          updatedAt
        }
        token
        createdAt
        updatedAt
      }
      document
      student {
        id
        firstName
        lastName
        dateOfBirth
        ubbId
        docNum
        location {
          id
          name
          asOfDate
          createdAt
          updatedAt
        }
        runwayCohort
        gpa {
          id
          value
          asOfDate
          createdAt
          updatedAt
        }
        race
        fafsaReceived
        sentToAccounting
        readyToAward
        newStudent
        archiveStudent
        academicYearStatus {
          id
          financialAidStatus
          studentStatus
          createdAt
          updatedAt
        }
        classes {
          id
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
          createdAt
          updatedAt
        }
        documents {
          id
          title
          link
          createdAt
          updatedAt
        }
        tasks {
          id
          flag
          document
          assignedDate
          dueDate
          completed
          completedDate
          detail
          createdAt
          updatedAt
        }
        notes {
          id
          note
          createdDate
          bookmark
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      assignedDate
      dueDate
      completed
      completedDate
      detail
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        flag
        user {
          id
          firstName
          lastName
          email
          admin
          avatar
          color
          token
          createdAt
          updatedAt
        }
        document
        student {
          id
          firstName
          lastName
          dateOfBirth
          ubbId
          docNum
          runwayCohort
          race
          fafsaReceived
          sentToAccounting
          readyToAward
          newStudent
          archiveStudent
          createdAt
          updatedAt
        }
        assignedDate
        dueDate
        completed
        completedDate
        detail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      admin
      avatar
      color
      quickLinks {
        id
        title
        link
        createdAt
        updatedAt
      }
      tasks {
        id
        flag
        user {
          id
          firstName
          lastName
          email
          admin
          avatar
          color
          token
          createdAt
          updatedAt
        }
        document
        student {
          id
          firstName
          lastName
          dateOfBirth
          ubbId
          docNum
          runwayCohort
          race
          fafsaReceived
          sentToAccounting
          readyToAward
          newStudent
          archiveStudent
          createdAt
          updatedAt
        }
        assignedDate
        dueDate
        completed
        completedDate
        detail
        createdAt
        updatedAt
      }
      notes {
        id
        user {
          id
          firstName
          lastName
          email
          admin
          avatar
          color
          token
          createdAt
          updatedAt
        }
        note
        createdDate
        bookmark
        createdAt
        updatedAt
      }
      token
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        admin
        avatar
        color
        quickLinks {
          id
          title
          link
          createdAt
          updatedAt
        }
        tasks {
          id
          flag
          document
          assignedDate
          dueDate
          completed
          completedDate
          detail
          createdAt
          updatedAt
        }
        notes {
          id
          note
          createdDate
          bookmark
          createdAt
          updatedAt
        }
        token
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
