package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.*;
import com.google.gson.*;
import database.*;

/**
 * Servlet implementation class ActivityServlet
 */
@WebServlet("/api/activity")
public class ActivityServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ActivityServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		
		List<Activity> activities;
		Activity activity;
		
		String category = request.getParameter("category");
		String id = request.getParameter("id");
		
		try {
			String json = "";
			ActivityDBAO db = new ActivityDBAO();
			if(id != null) {
				activity = db.getActivityById(id);
				json = new Gson().toJson(activity);
			} else if(category != null) {
				activities = db.getActivitiesByCategory(category);
				json = new Gson().toJson(activities);
			}
			
			out.print(json);
			out.flush();
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
	 		response.resetBuffer();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		
		String name = request.getParameter("name");
		String desc = request.getParameter("desc");
		String startTime = request.getParameter("startTime");
		String endTime = request.getParameter("endTime");
		String category = request.getParameter("category");
		int count = Integer.parseInt(request.getParameter("count"));
		String image = request.getParameter("image");
		String creatorId = request.getParameter("creatorId");
		Activity activity = new Activity(null, name, desc, startTime, endTime, category, count, image, 0, 0, creatorId, null, null, null, null);
		
		try {
			ActivityDBAO db = new ActivityDBAO();
			db.createActivity(activity);
			out.print(0);
			out.flush();
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
	 		response.resetBuffer();
		}
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
