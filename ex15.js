function loadUsers(userIds, load, done) {
	var users = [];
	for (var i = 0; i < userIds.length; i++) {
		setTimeout(users.push(load(userIds[i])));
	}
	return users;
}

module.exports = loadUsers;



