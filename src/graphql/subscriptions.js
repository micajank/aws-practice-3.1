/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAcademicYearStatus = /* GraphQL */ `
  subscription OnCreateAcademicYearStatus {
    onCreateAcademicYearStatus {
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
export const onUpdateAcademicYearStatus = /* GraphQL */ `
  subscription OnUpdateAcademicYearStatus {
    onUpdateAcademicYearStatus {
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
export const onDeleteAcademicYearStatus = /* GraphQL */ `
  subscription OnDeleteAcademicYearStatus {
    onDeleteAcademicYearStatus {
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
export const onCreateAcademicYearStatusInput = /* GraphQL */ `
  subscription OnCreateAcademicYearStatusInput {
    onCreateAcademicYearStatusInput {
      id
      academicYearId
      financialAidStatus
      studentStatus
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAcademicYearStatusInput = /* GraphQL */ `
  subscription OnUpdateAcademicYearStatusInput {
    onUpdateAcademicYearStatusInput {
      id
      academicYearId
      financialAidStatus
      studentStatus
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAcademicYearStatusInput = /* GraphQL */ `
  subscription OnDeleteAcademicYearStatusInput {
    onDeleteAcademicYearStatusInput {
      id
      academicYearId
      financialAidStatus
      studentStatus
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAcademicYear = /* GraphQL */ `
  subscription OnCreateAcademicYear {
    onCreateAcademicYear {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAcademicYear = /* GraphQL */ `
  subscription OnUpdateAcademicYear {
    onUpdateAcademicYear {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAcademicYear = /* GraphQL */ `
  subscription OnDeleteAcademicYear {
    onDeleteAcademicYear {
      id
      year
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument {
    onCreateDocument {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument {
    onUpdateDocument {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument {
    onDeleteDocument {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
export const onCreateQuickLink = /* GraphQL */ `
  subscription OnCreateQuickLink {
    onCreateQuickLink {
      id
      title
      link
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuickLink = /* GraphQL */ `
  subscription OnUpdateQuickLink {
    onUpdateQuickLink {
      id
      title
      link
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuickLink = /* GraphQL */ `
  subscription OnDeleteQuickLink {
    onDeleteQuickLink {
      id
      title
      link
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateStudentGpaInput = /* GraphQL */ `
  subscription OnCreateStudentGpaInput {
    onCreateStudentGpaInput {
      id
      value
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentGpaInput = /* GraphQL */ `
  subscription OnUpdateStudentGpaInput {
    onUpdateStudentGpaInput {
      id
      value
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentGpaInput = /* GraphQL */ `
  subscription OnDeleteStudentGpaInput {
    onDeleteStudentGpaInput {
      id
      value
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentLocationInput = /* GraphQL */ `
  subscription OnCreateStudentLocationInput {
    onCreateStudentLocationInput {
      id
      name
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentLocationInput = /* GraphQL */ `
  subscription OnUpdateStudentLocationInput {
    onUpdateStudentLocationInput {
      id
      name
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentLocationInput = /* GraphQL */ `
  subscription OnDeleteStudentLocationInput {
    onDeleteStudentLocationInput {
      id
      name
      asOfDate
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentStatus = /* GraphQL */ `
  subscription OnCreateStudentStatus {
    onCreateStudentStatus {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentStatus = /* GraphQL */ `
  subscription OnUpdateStudentStatus {
    onUpdateStudentStatus {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentStatus = /* GraphQL */ `
  subscription OnDeleteStudentStatus {
    onDeleteStudentStatus {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
