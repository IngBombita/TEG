exports.register = function register(data) {
  if (!data.email) throw new Error('El email no puede dejarse en blanco');
  return data;
};
