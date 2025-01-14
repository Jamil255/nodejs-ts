const allUserController = async (req, res) => {
    const userData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    res.json({
        users: userData,
    });
};
export { allUserController };
