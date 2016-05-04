module.exports = function(ExtendedUser) {

    ExtendedUser.beforeRemote(
        '*.__link__tasks',
        function(ctx, inst, next) {
            console.log(1);
            next();
        });

};
