class IssueNormalizer {
  normalizeIssueResponse(response) {
    const parsedIssue = JSON.parse(response);

    return {
      id: parsedIssue.id,
      title: parsedIssue.title,
      description: parsedIssue.description,
      stateId: parsedIssue.state.id,
      assignedTo: {
        firstName: parsedIssue.assignedTo.firstName,
        lastName: parsedIssue.assignedTo.lastName,
        initialName: `${parsedIssue.assignedTo.firstName[0]}${parsedIssue.assignedTo.lastName[0]}`,
        fullName: `${parsedIssue.assignedTo.firstName} ${parsedIssue.assignedTo.lastName}`,
      },
    };
  }
}

export default new IssueNormalizer();
