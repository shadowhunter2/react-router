var React = require('react');

var InvestDetailApp = React.createClass({

	render: function() {
		return (
			<div className="container-fluid investDetail">
				<ol className="breadcrumb">
			    <li><a href="#">首页</a></li>
					<li><a href="#">投资管理</a></li>
					<li className="active">投资详情</li>
				</ol>

			  <div className="row detail-header">
			    <div className="col-md-11">目前投资状态为   待还款   请在  2015-08-24    10：00 号之前 完成还款</div>
			    <div className="col-md-1">查看合同</div>
			  </div>

				<div className="row">
			    <div className="col-md-4">1</div>
			    <div className="col-md-4">2</div>
			    <div className="col-md-4">3</div>
			    <div className="col-md-4">4</div>
			    <div className="col-md-4">5</div>
			    <div className="col-md-4">6</div>
			  </div>
			</div>
		);
	}

});

module.exports = InvestDetailApp;