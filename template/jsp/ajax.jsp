<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="weaver.general.Util"%>
<%@ page import="weaver.conn.*"%>
<%@ page import="weaver.hrm.*"%>
<%@ page import="java.util.*"%>
<%@ page import="java.net.*"%>
<%@ page import="net.sf.json.JSONObject"%>
<%@ page import="net.sf.json.JSONArray"%>
<%@ page import="com.customcode.util.ActionLog"%>
<%@ page import="org.apache.commons.logging.LogFactory"%>
<%@ page import="com.weaver.formmodel.mobile.manager.MobileUserInit"%>
<%@ page import="com.weaver.formmodel.util.DateHelper"%>
<%@ include file="/mobilemode/apps/solex/gongyong/JCOProperties888.jsp"%>

<%
	JSONObject resultObj = new JSONObject();

	resultObj.put("code",0);
	resultObj.put("msg","提交成功");
%>
