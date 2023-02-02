const errorMessage = (error, req, res) => {
    return res.status(500).json({ message: error });
};

export default errorMessage;
