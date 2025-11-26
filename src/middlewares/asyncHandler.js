const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
   return Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

// try catch

// const asyncHandler = (requestHandler) => {
//   return async (req, res, next) => {
//     try {
//       await requestHandler(req, res, next);
//     } catch (error) {
//       res.status(error.code || 500).json({
//         status: false,
//         message: error.message,
//       });
//     }
//   };
// };
