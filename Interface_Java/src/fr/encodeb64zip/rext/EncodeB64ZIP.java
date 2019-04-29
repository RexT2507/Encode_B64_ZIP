package fr.encodeb64zip.rext;

import javax.swing.*;

public class EncodeB64ZIP {

	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		
		JFrame frame = new JFrame("Encode base64 & zip");
		
		frame.setIconImage(new ImageIcon("img/icon.png").getImage());
		
		frame.setSize(600, 400);
		
		frame.setLocationRelativeTo(null);
		
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		JPanel panel = new JPanel();
		
		frame.add(panel);
		
		placeComponents(panel);
		
		frame.setVisible(true);
		
	}

	private static void placeComponents(JPanel panel) {
		// TODO Auto-generated method stub
		
	}

}
