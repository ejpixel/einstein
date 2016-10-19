
Meteor.startup(function () {

	//insere usuário padrão
	if(!Meteor.users.find().count()) {
		var user = {
			username: 'admin',
			password: 'admin'
		};
		Accounts.createUser(user);
	}
	//insere alunos dummy
	if(!Alunos.find().count()) {
		var aluno1 = {
			matricula: 123456,
			nome: 'Fulano de tal',
			idade: 19,
			foto: 'http://img02.deviantart.net/33cf/i/2007/277/6/4/student_dude_by_sketchoo.jpg'
		};
		Alunos.insert(aluno1);
		var aluno2 = {
			matricula: 123123,
			nome: 'Asdrubal',
			idade: 19,
			foto: 'http://www.featurepics.com/StockImage/20071008/skate-dude-stock-illustration-480419.jpg'
		};
		Alunos.insert(aluno2);
		var aluno3 = {
			matricula: 456789,
			nome: 'Aluno de computação',
			idade: 19,
			foto: 'http://cdn.productivemuslim.com/wp-content/uploads/2010/08/student-sleeping-on-books-ProductiveMuslim.jpg'
		};
		Alunos.insert(aluno3);
	}
});
