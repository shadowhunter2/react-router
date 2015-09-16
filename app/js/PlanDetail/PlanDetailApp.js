var React = require('react');

var PlanDetailApp = React.createClass({

	render: function() {
		return (
			<div className="container-fluid planDetail">
				<ol className="breadcrumb">
					<li><a href="#">首页</a></li>
					<li><a href="#">投资理财管理</a></li>
					<li className="active">详情</li>
				</ol>

				<div className="row detail-header">
				  <div className="col-md-4">已完成</div>
				  <div className="col-md-4">编号：adsfasdfasdfds</div>
				  <div className="col-md-4">2015-07-22 09:12:12</div>
				</div>

				<div className="row">
				  <div className="col-md-4">1</div>
				  <div className="col-md-4">2</div>
				  <div className="col-md-4">3</div>
				  <div className="col-md-4">4</div>
				  <div className="col-md-4">5</div>
				  <div className="col-md-4">6</div>
				</div>
				
				<form>
				  <div className="form-group">
				    <div className="form-group">
					    <label htmlFor="">审核状态</label>
					    <label className="radio-inline">
							  <input type="radio" name="aaa" id="" defaultChecked/> 通过
							</label>
							<label className="radio-inline">
							  <input type="radio" name="aaa" id=""  /> 不通过
							</label>
					  </div>
				  </div>
				  <div className="form-group">
				    <label htmlFor="">审核状态</label>
				    <textarea className="form-control" rows="3" defaultValue="看着也还行"></textarea>
				  </div>
				  
				  <button type="submit" className="btn btn-default">确定</button>
				</form>
			</div>
		);
	}

});

module.exports = PlanDetailApp;