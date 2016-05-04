module.exports = function (Task) {

    Task.on('attached', function () {
        var server = Task;

        Task.afterRemote(
            '*.__link__extendedUsers',
            function (ctx, inst, next) {

                console.log('before');

                var linkedObjectId = ctx.args.data.extendedUserId;
                var ExtendedUser   = server.models.ExtendedUser;

                console.log('After link response: ', ctx, inst, linkedObjectId, ExtendedUser);

                ExtendedUser.findById(linkedObjectId,
                    function (err, user) {
                        if (err) console.log(err);

                        var _thing = ctx.instance.__data;
                        var _to    = user;
                        var _from  = ctx.req.user.__data.username;

                        console.log(_thing, _to, _from, 'success');

                        next();
                    });
            });
    });

};
