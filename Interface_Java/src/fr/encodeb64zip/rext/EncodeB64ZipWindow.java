package fr.encodeb64zip.rext;

import java.awt.FlowLayout;
import java.awt.Font;

import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class EncodeB64ZipWindow extends JFrame 
{
	
	public EncodeB64ZipWindow()
	{
		super();
		
		// On initialise notre fen�tre
		build();
	}



	private void build() 
	{
		// TODO Auto-generated method stub
		
		// On donne un titre � l'application
		setTitle("Encode base64 & zip");
		
		// On attribut une icone � notre fen�tre
		setIconImage(new ImageIcon("img/icon.jpg").getImage());
		
		// On donne une taille � notre fen�tre
		setSize(800, 500);
		
		// On centre la fen�tre sur l'�cran
		setLocationRelativeTo(null);
		
		// On interdit la redimensionnement de la fen�tre
		setResizable(false);
		
		// On dit � l'application de se fermer quand on clique sur la croix
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		setContentPane(buildContentPane());
		
	}



	private JPanel buildContentPane() 
	{
		// TODO Auto-generated method stub
		
		JPanel panel = new JPanel();
		
		panel.setLayout(new FlowLayout());
	 
		JLabel titreLabel = new JLabel("Options de l'application");
		titreLabel.setBounds(275, 20, 230, 35);
		titreLabel.setFont(new java.awt.Font(Font.SANS_SERIF, Font.CENTER_BASELINE, 20));
		panel.add(titreLabel);
	 
		return panel;
	}}
