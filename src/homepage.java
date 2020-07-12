

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class homepage
 */
@WebServlet("/homepage")
public class homepage extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public homepage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if(request.getParameter("signup")!= null)
			response.sendRedirect("signup.jsp");
		else if(request.getParameter("login")!= null)
			response.sendRedirect("login.jsp");
		else if(request.getParameter("about")!= null)
			response.sendRedirect("about.jsp");
		else if(request.getParameter("login1")!= null)
			response.sendRedirect("profile.jsp");
		else if(request.getParameter("signup1")!= null)
			response.sendRedirect("registration.jsp");
		else if(request.getParameter("taketest")!= null)
			response.sendRedirect("test.jsp");
		else if(request.getParameter("save")!= null)
			response.sendRedirect("profile.jsp");
		else if(request.getParameter("result")!= null)
			response.sendRedirect("profile.jsp");
		else if(request.getParameter("logout")!= null)
			response.sendRedirect("index.jsp");
		
	}

}
