function NotFoundHandler(app) {
    app.use((req, res, next) => {
        res.status(404).json({
            message: err?.message || err?.stack || "Not Found Route",
        });
    });
}

module.exports = NotFoundHandler;
