module.exports = function(){
	var _self = this;
	
	this._res  = arguments[0];
	this._req  = arguments[1];
	
<<<<<<< HEAD
	// inherits
=======
	// ����̳�ʵ��
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
	ACTION.call(_self);
	
	SYS.inherits(this, ACTION);
	
<<<<<<< HEAD
	_self.init(this._res, this._req);

=======
>>>>>>> 1e2177e55b7529b41afef80507cfec956443975b
	this.test = function(){
		_self.render('example.jade');
	}
}