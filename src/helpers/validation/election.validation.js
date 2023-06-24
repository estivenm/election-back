import Joi from 'joi'

const schemaCreateElection = () => {
  return Joi.object().keys({
    title: Joi.string().trim().required(),
    description: Joi.string().trim().required()
  })
}
export { schemaCreateElection }
