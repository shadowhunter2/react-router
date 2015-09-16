var React = require('react');

var InvesterManageApp = React.createClass({

	render: function() {
		return (
			<div className="container-fluid investerManage">
			  <ol className="breadcrumb">
			    <li><a href="#">首页</a></li>
			    <li className="active">投资人管理</li>
			  </ol>

			  <form className="form-inline" onsubmit="return false;">
			    <div className="form-group">
			      <label htmlFor="">姓名</label>
			      <input type="text" className="form-control" id=""  />
			    </div>

			    <div className="form-group">
			      <label htmlFor="">身份证</label>
			      <input type="text" className="form-control" id=""  />
			    </div>

			    <div className="form-group">
			      <label htmlFor="">手机</label>
			      <input type="text" className="form-control" id=""  />
			    </div>

			    <div className="hr15"></div>

			    <div className="form-group">
			      <label htmlFor="">微信</label>
			      <input type="text" className="form-control" id=""  />
			    </div>
			    
			    <div className="form-group">
			      <label htmlFor="">邀请码</label>
			      <input type="text" className="form-control" id=""  />
			    </div>

			    <div className="hr15"></div>

			    <div className="form-group">
			      <a href="javascript:;" className="btn btn-primary m10">查询</a>
			      <a href="javascript:;" className="btn btn-default m10">重置</a>
			    </div>
			  </form>
			  
			  <div className="hr15"></div>
			  <div className="border1px"></div>
			  <div className="hr15"></div>

			  <div className="table-responsive">
			    <table className="table table-bordered">
			      <thead>
			        <tr>
			          <th>姓名</th>
			          <th>身份证号</th>
			          <th>手机（账号）</th>
			          <th>微信</th>
			          <th>银行</th>
			          <th>卡号</th>
			          <th>账户状态</th>
			          <th>邀请码</th>
			          <th>有效期</th>
			          <th>操作</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>asd飞</td>
			          <td>
			            <div className="btn-group">
			              <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			                操作 <span className="caret"></span>
			              </button>
			              <ul className="dropdown-menu">
			                <li><a href="#">审核</a></li>
			              </ul>
			            </div>
			          </td>
			        </tr>   
			      </tbody>
			    </table>
			  </div>
			</div>
		);
	}

});

module.exports = InvesterManageApp;