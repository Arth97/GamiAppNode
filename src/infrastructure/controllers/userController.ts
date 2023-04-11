const getAllUsers = (req, res) => {
  try {
    res.status(200).send({
      status: 'OK',
      data: 'Hola'
    })
  } catch (err) {
    res.status(err?.status || 500).send({
      status: 'FAILED',
      data: { error: err?.message || err }
    })
  }
}

const getOneUser = (req, res) => {

}

const createNewUser = (req, res) => {

}

const deleteOneUser = (req, res) => {

}

export default {
  getAllUsers,
  getOneUser,
  createNewUser,
  deleteOneUser
}
