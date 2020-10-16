/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createAcademicYearStatus = /* GraphQL */ `
  mutation CreateAcademicYearStatus(
    $input: CreateAcademicYearStatusInput!
    $condition: ModelAcademicYearStatusConditionInput
  ) {
    createAcademicYearStatus(input: $input, condition: $condition) {
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
export const updateAcademicYearStatus = /* GraphQL */ `
  mutation UpdateAcademicYearStatus(
    $input: UpdateAcademicYearStatusInput!
    $condition: ModelAcademicYearStatusConditionInput
  ) {
    updateAcademicYearStatus(input: $input, condition: $condition) {
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
export const deleteAcademicYearStatus = /* GraphQL */ `
  mutation DeleteAcademicYearStatus(
    $input: DeleteAcademicYearStatusInput!
    $condition: ModelAcademicYearStatusConditionInput
  ) {
    deleteAcademicYearStatus(input: $input, condition: $condition) {
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
export const createAcademicYearStatusInput = /* GraphQL */ `
  mutation CreateAcademicYearStatusInput(
    $input: CreateAcademicYearStatusInputInput!
    $condition: ModelAcademicYearStatusInputConditionInput
  ) {
    createAcademicYearStatusInput(input: $input, condition: $condition) {
      id
      academicYearId
      financialAidStatus
      studentStatus
      createdAt
      updatedAt
    }
  }
`;
export const updateAcademicYearStatusInput = /* GraphQL */ `
  mutation UpdateAcademicYearStatusInput(
    $input: UpdateAcademicYearStatusInputInput!
    $condition: ModelAcademicYearStatusInputConditionInput
  ) {
    updateAcademicYearStatusInput(input: $input, condition: $condition) {
      id
      academicYearId
      financialAidStatus
      studentStatus
      createdAt
      updatedAt
    }
  }
`;
export const deleteAcademicYearStatusInput = /* GraphQL */ `
  mutation DeleteAcademicYearStatusInput(
    $input: DeleteAcademicYearStatusInputInput!
    $condition: ModelAcademicYearStatusInputConditionInput
  ) {
    deleteAcademicYearStatusInput(input: $input, condition: $condition) {
      id
      academicYearId
      financialAidStatus
      studentStatus
      createdAt
      updatedAt
    }
  }
`;
export const createAcademicYear = /* GraphQL */ `
  mutation CreateAcademicYear(
    $input: CreateAcademicYearInput!
    $condition: ModelAcademicYearConditionInput
  ) {
    createAcademicYear(input: $input, condition: $condition) {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const updateAcademicYear = /* GraphQL */ `
  mutation UpdateAcademicYear(
    $input: UpdateAcademicYearInput!
    $condition: ModelAcademicYearConditionInput
  ) {
    updateAcademicYear(input: $input, condition: $condition) {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const deleteAcademicYear = /* GraphQL */ `
  mutation DeleteAcademicYear(
    $input: DeleteAcademicYearInput!
    $condition: ModelAcademicYearConditionInput
  ) {
    deleteAcademicYear(input: $input, condition: $condition) {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
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
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
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
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createQuickLink = /* GraphQL */ `
  mutation CreateQuickLink(
    $input: CreateQuickLinkInput!
    $condition: ModelQuickLinkConditionInput
  ) {
    createQuickLink(input: $input, condition: $condition) {
      id
      title
      link
      createdAt
      updatedAt
    }
  }
`;
export const updateQuickLink = /* GraphQL */ `
  mutation UpdateQuickLink(
    $input: UpdateQuickLinkInput!
    $condition: ModelQuickLinkConditionInput
  ) {
    updateQuickLink(input: $input, condition: $condition) {
      id
      title
      link
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuickLink = /* GraphQL */ `
  mutation DeleteQuickLink(
    $input: DeleteQuickLinkInput!
    $condition: ModelQuickLinkConditionInput
  ) {
    deleteQuickLink(input: $input, condition: $condition) {
      id
      title
      link
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createStudentGpaInput = /* GraphQL */ `
  mutation CreateStudentGpaInput(
    $input: CreateStudentGpaInputInput!
    $condition: ModelStudentGpaInputConditionInput
  ) {
    createStudentGpaInput(input: $input, condition: $condition) {
      id
      value
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const updateStudentGpaInput = /* GraphQL */ `
  mutation UpdateStudentGpaInput(
    $input: UpdateStudentGpaInputInput!
    $condition: ModelStudentGpaInputConditionInput
  ) {
    updateStudentGpaInput(input: $input, condition: $condition) {
      id
      value
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudentGpaInput = /* GraphQL */ `
  mutation DeleteStudentGpaInput(
    $input: DeleteStudentGpaInputInput!
    $condition: ModelStudentGpaInputConditionInput
  ) {
    deleteStudentGpaInput(input: $input, condition: $condition) {
      id
      value
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const createStudentLocationInput = /* GraphQL */ `
  mutation CreateStudentLocationInput(
    $input: CreateStudentLocationInputInput!
    $condition: ModelStudentLocationInputConditionInput
  ) {
    createStudentLocationInput(input: $input, condition: $condition) {
      id
      name
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const updateStudentLocationInput = /* GraphQL */ `
  mutation UpdateStudentLocationInput(
    $input: UpdateStudentLocationInputInput!
    $condition: ModelStudentLocationInputConditionInput
  ) {
    updateStudentLocationInput(input: $input, condition: $condition) {
      id
      name
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudentLocationInput = /* GraphQL */ `
  mutation DeleteStudentLocationInput(
    $input: DeleteStudentLocationInputInput!
    $condition: ModelStudentLocationInputConditionInput
  ) {
    deleteStudentLocationInput(input: $input, condition: $condition) {
      id
      name
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const createStudentStatus = /* GraphQL */ `
  mutation CreateStudentStatus(
    $input: CreateStudentStatusInput!
    $condition: ModelStudentStatusConditionInput
  ) {
    createStudentStatus(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const updateStudentStatus = /* GraphQL */ `
  mutation UpdateStudentStatus(
    $input: UpdateStudentStatusInput!
    $condition: ModelStudentStatusConditionInput
  ) {
    updateStudentStatus(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudentStatus = /* GraphQL */ `
  mutation DeleteStudentStatus(
    $input: DeleteStudentStatusInput!
    $condition: ModelStudentStatusConditionInput
  ) {
    deleteStudentStatus(input: $input, condition: $condition) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
