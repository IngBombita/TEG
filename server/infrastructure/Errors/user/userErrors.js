exports.JsonBodyInvalid = {
  returnState: 400,
  returnMessage: 'JSON body invalid',
};
exports.EmailAlreadyExist = {
  returnState: 412,
  returnMessage: 'email already exist',
};
exports.NickNameAlreadyExist = {
  returnState: 412,
  returnMessage: 'nickname already exist',
};
exports.ErrorSaving = {
  returnState: 500,
  returnMessage: 'An unexpected error has ocurred while saving the user',
};
exports.ErrorDeleting = {
  returnState: 500,
  returnMessage: 'An unexpected error has ocurred while deleting the user',
};
