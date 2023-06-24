const validateRequest = (body, schema) => {
  const { error } = schema.validate(body)
  if (error) {
    const errorMessage = error.details
      ? error.details[0].message.replace(/['"]+/g, '')
      : error.message
    return { message: errorMessage }
  }
}

export { validateRequest }
