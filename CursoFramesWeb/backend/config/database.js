const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useMongoClient: true})

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório.'"
mongoose.Error.messages.Number.min = "0 '{VALUE}' informado é menor que o limite máximo de '{MIN}'."
mongoose.Error.messages.Number.max = "0 '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "0 '{VALUE}' não é valido para o atributo '{PATH}'."
