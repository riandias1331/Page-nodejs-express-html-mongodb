exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'You need to login.')
        req.session.save(() => res.redirect('/'))
        return // Encerra a execução do middleware
    }

    next()
}