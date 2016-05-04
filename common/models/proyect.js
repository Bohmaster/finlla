module.exports = function(Proyect) {

    Proyect.on('attached', function() {
        var server = Proyect;

        Proyect.observe('after save', function(ctx, next) {
            console.log(ctx);
            server.app.io.emit('proyect:created', ctx.instance);
            next();
        });
    })

};
