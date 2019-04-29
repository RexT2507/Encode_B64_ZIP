package fr.encodeb64zip.rext;

import java.awt.Font;

import javax.swing.*;

public class EncodeB64ZIP {

	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		
		// On déclare notre JFrame et on nomme notre fenêtre
		JFrame frame = new JFrame("Encode base64 & zip");
		
		// On attribut une icone 
		frame.setIconImage(new ImageIcon("img/icon.jpg").getImage());
		
		frame.setSize(800, 500);
		
		frame.setLocationRelativeTo(null);
		
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		JPanel panel = new JPanel();
		
		frame.add(panel);
		
		placeComponents(panel);
		
		frame.setVisible(true);
		
	}

	private static void placeComponents(JPanel panel) 
	{
		// TODO Auto-generated method stub
		
		panel.setLayout(null);
		
		JLabel titreLabel = new JLabel("Options de l'application");
		titreLabel.setBounds(275, 30, 230, 35);
		titreLabel.setFont(new java.awt.Font(Font.SANS_SERIF, Font.CENTER_BASELINE, 20));
		panel.add(titreLabel);
		
	}

}
