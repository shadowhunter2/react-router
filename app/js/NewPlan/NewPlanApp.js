var React = require('react');
var InputCanlerdar = require('../../base_js/InputCanlerdar.js');

var NewPlanApp = React.createClass({

	render: function() {
		return (
			<div className="container-fluid newPlan">
				<ol className="breadcrumb">
					<li><a href="#">首页</a></li>
					<li><a href="#">投资理财管理</a></li>
					<li className="active">发布</li>
				</ol>

				<div className="hr45"></div>

					
			  <form className="form-inline" onsubmit="return false;">
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
						    <label htmlFor="">计划募集金额：</label>
						    <input type="text" className="form-control" id=""/>元
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">基本收益：</label>
						    <input type="text" className="form-control" id=""/>元
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">计划募集开始时间：</label>
						    <InputCanlerdar/>
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">计划募集结束时间：</label>
						    <InputCanlerdar/>
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">计划还款时间</label>
						    <InputCanlerdar/>
						    <br/>
						    <label htmlFor=""></label>  <span className="m5">理财周期60天</span>
						  </div>
						  <div className="hr1"></div>

							<div className="form-group">
						    <label htmlFor="">产品期限：</label>
						    <input type="text" className="form-control" id=""/>天
						  </div>
						  <div className="hr1"></div>
							
							<div className="form-group">
						    <label htmlFor="">还款时间：</label>
						    <InputCanlerdar/>
						  </div>
						</div>

						<div className="col-md-6">
						  
							<div className="form-group">
						    <label htmlFor="">还款方式：</label>
						    <select className="form-control" id="">
								  <option>11111111</option>
								  <option>22222222</option>
								  <option>33333333</option>
								  <option>44444444</option>
								  <option>55555555</option>
								</select>
						  </div>
						  <div className="hr1"></div>
						  
							<div className="form-group">
							    <label htmlFor="">手续费：</label>
							    <label className="radio-inline">
									  <input type="radio" name="radio1" id="" value="" defaultChecked/> 无
									</label>
									<label className="radio-inline">
									  <input type="radio" name="radio1" id="" value=""/> 有
									</label>
							  </div>
							  <div className="hr1"></div>
							  
								<div className="form-group">
							    <label htmlFor="">支持提前回款：</label>
							    <label className="radio-inline">
									  <input type="radio" name="radio2" id="" value="" defaultChecked/> 否
									</label>
									<label className="radio-inline">
									  <input type="radio" name="radio2" id="" value=""/> 是
									</label>
							  </div>
							  <div className="hr1"></div>
							  
								<div className="form-group">
							    <label htmlFor="">起购金额：</label>
							    <input type="text" className="form-control" id=""/>元
							  </div>
							  <div className="hr1"></div>
							  
								<div className="form-group">
							    <label htmlFor="">购买金额上限：</label>
							    <input type="text" className="form-control" id=""/>元
							  </div>
							  <div className="hr1"></div>
							  
								<div className="form-group">
							    <label htmlFor="">起息时间：</label>
							     <select className="form-control" id="">
									  <option>11111111</option>
									  <option>22222222</option>
									  <option>33333333</option>
									  <option>44444444</option>
									  <option>55555555</option>
									</select>
							  </div>

							  <div className="hr45"></div>

							  <div className="form-group">
						  		<button type="button" className="btn btn-default m10" >取消</button>
						 			<button type="button" className="btn btn-primary m10" >确定</button>
							  </div>
						</div>
							
				  </div>
				</form>
			</div>
		);
	}

});

module.exports = NewPlanApp;