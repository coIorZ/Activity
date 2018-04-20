package servlets;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Files;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import java.util.*;
import com.google.gson.*;
import database.*;
import javafx.util.converter.ShortStringConverter;

/**
 * Servlet implementation class ActivityServlet
 */
@WebServlet("/api/activity")
@MultipartConfig
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
		try {
			String category = request.getParameter("category");
			String imageUrl = request.getParameter("imageUrl");
			String image = "/Activity/assets/" + category + ".jpg";
			if(!imageUrl.isEmpty()) {
				Part part = request.getPart("image");
				String fileName = "img-" + Long.toString(System.currentTimeMillis()) + ".jpg";
				File file = new File(getServletContext().getRealPath("/assets"), fileName);
				InputStream fileContent = part.getInputStream();
				Files.copy(fileContent, file.toPath());
				image = "/Activity/assets/" + fileName;
			}
			String name = request.getParameter("name");
			String desc = request.getParameter("desc");
			String startTime = request.getParameter("startTime");
			String endTime = request.getParameter("endTime");
			int count = Integer.parseInt(request.getParameter("count"));
			String creatorId = request.getParameter("creatorId");
			
			Activity activity = new Activity(null, name, desc, startTime, endTime, category, count, image, 0, 0, creatorId, null, null, null, null, null);

			ActivityDBAO db = new ActivityDBAO();
			db.createActivity(activity);
			out.print(0);
			out.flush();
		} catch (Exception e) {
			e.printStackTrace();
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
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		
		String id = Util.getData(request.getInputStream());
		
		try {
			ActivityDBAO db = new ActivityDBAO();
			db.deleteActivity(id);
			
			out.print(0);
			out.flush();
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
	 		response.resetBuffer();
		}
	}

}
