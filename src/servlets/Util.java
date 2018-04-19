package servlets;

import java.io.*;

import javax.servlet.ServletInputStream;

public class Util {
	static String getData(ServletInputStream stream) {
		BufferedReader br = new BufferedReader(new InputStreamReader(stream));
		String s = null;
		String data = "";
		try {
			while((s = br.readLine()) != null) {
			    data = data.concat(s).concat("\n");
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		data = data.substring(0,data.length()-1);
		return data;
	}
}
