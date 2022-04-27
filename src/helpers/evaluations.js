export const parseRows = (evaluations) => {
  const rows = evaluations?.map((e) => {
    return {
      ...e,
      judge: `${e.judge.user.first_name} ${e.judge.user.last_name}`,
      projectName: `${e.project.title}`,
    }
  })
  return rows
}
