import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            super().showPage()
        super().save()

    def draw_page_number(self, page_count):
        pass  # Single page ATS resume doesn't need footer page numbers

def generate_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=34,
        rightMargin=34,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()

    # Custom typography styles optimized for ATS parsers
    name_style = ParagraphStyle(
        'NameStyle',
        fontName='Helvetica-Bold',
        fontSize=19,
        leading=22,
        alignment=1, # Center
        textColor=colors.HexColor('#111827')
    )

    title_style = ParagraphStyle(
        'TitleStyle',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        alignment=1,
        textColor=colors.HexColor('#1F2937')
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        alignment=1,
        textColor=colors.HexColor('#374151')
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        spaceBefore=5,
        spaceAfter=2,
        textColor=colors.HexColor('#111827'),
        textTransform='uppercase'
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.2,
        textColor=colors.HexColor('#1F2937')
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.2,
        leftIndent=12,
        firstLineIndent=-9,
        textColor=colors.HexColor('#1F2937')
    )

    story = []

    # 1. HEADER
    story.append(Paragraph("SHIVAJI C S", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Java Backend Engineer / Software Development Engineer (SDE)", title_style))
    story.append(Spacer(1, 3))
    
    contact_line = (
        "+91 9894180126 &nbsp;|&nbsp; "
        "<a href='mailto:shivajichandramohan97@gmail.com' color='#1D4ED8'>shivajichandramohan97@gmail.com</a> &nbsp;|&nbsp; "
        "Coimbatore, Tamil Nadu, India"
    )
    links_line = (
        "<a href='https://github.com/shivaji-25' color='#1D4ED8'>github.com/shivaji-25</a> &nbsp;|&nbsp; "
        "<a href='https://linkedin.com/in/shivaji-c-s' color='#1D4ED8'>linkedin.com/in/shivaji-c-s</a> &nbsp;|&nbsp; "
        "<a href='https://leetcode.com/u/shivajics/' color='#1D4ED8'>leetcode.com/u/shivajics</a>"
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Paragraph(links_line, contact_style))
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#9CA3AF'), spaceBefore=2, spaceAfter=4))

    # 2. PROFESSIONAL SUMMARY
    story.append(Paragraph("<b>PROFESSIONAL SUMMARY</b>", section_heading))
    summary_text = (
        "Backend-focused Software Engineer with a solid foundation in <b>Java, Spring Boot, MySQL, and Data Structures & Algorithms (DSA)</b>. "
        "Experienced in developing RESTful APIs, relational schema design, query optimization, and full-stack integration across the <b>MERN stack</b>. "
        "Proven problem-solving proficiency with <b>127+ LeetCode DSA</b> problems solved. Skilled in writing clean, scalable, maintainable code with modern engineering workflows."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#D1D5DB'), spaceBefore=2, spaceAfter=4))

    # 3. TECHNICAL SKILLS
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", section_heading))
    skills = [
        "<b>Languages:</b> Java (Core & OOP), JavaScript (ES6+), SQL, HTML5, CSS3",
        "<b>Backend & Frameworks:</b> Spring Boot, Node.js, Express.js, RESTful APIs, Microservices Architecture",
        "<b>Frontend & Full Stack:</b> React.js, Tailwind CSS, MERN Stack (MongoDB, Express.js, React, Node.js)",
        "<b>Databases:</b> MySQL, MongoDB, Query Optimization, Relational Database Modeling",
        "<b>Core CS Foundations:</b> Data Structures & Algorithms (DSA), OOP, DBMS, Computer Networks, Operating Systems",
        "<b>Tools & Platforms:</b> Git, GitHub, Postman, VS Code, Cursor, Windsurf, Claude AI"
    ]
    for s in skills:
        story.append(Paragraph(f"• {s}", bullet_style))
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#D1D5DB'), spaceBefore=2, spaceAfter=4))

    # 4. EXPERIENCE
    story.append(Paragraph("<b>WORK EXPERIENCE</b>", section_heading))
    exp_header = (
        "<table width='100%'><tr>"
        "<td align='left'><b>Software Development Intern</b> | Pinesphere Solutions</td>"
        "<td align='right'><i>Coimbatore, India</i></td>"
        "</tr></table>"
    )
    story.append(Paragraph(
        "<b>Software Development Intern</b> &nbsp;|&nbsp; <b>Pinesphere Solutions</b> <font color='#4B5563'>— Coimbatore, India</font>",
        body_style
    ))
    exp_bullets = [
        "Engineered web features and backend integration using modern full-stack methodologies and agile development workflows.",
        "Constructed and tested RESTful API endpoints, verifying payload structures and server-side input validation.",
        "Collaborated in cross-functional team sprints, participating in code reviews, bug remediation, and version control via Git/GitHub."
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#D1D5DB'), spaceBefore=2, spaceAfter=4))

    # 5. PROJECTS
    story.append(Paragraph("<b>TECHNICAL PROJECTS</b>", section_heading))
    
    projects = [
        {
            "title": "Campus Navigation System",
            "tech": "Java, Graph Algorithms, Dijkstra Algorithm, Data Structures",
            "bullets": [
                "Engineered a graph-based pathfinding engine using Dijkstra's algorithm to compute shortest paths across campus landmarks.",
                "Structured adjacency list graph representations, optimizing traversal performance to deliver real-time directional responses."
            ]
        },
        {
            "title": "Online Voting System",
            "tech": "Java, Spring Boot, MySQL, REST APIs, HTML5/CSS3/JavaScript",
            "bullets": [
                "Built a secure web election platform managing voter authentication, authorization, and real-time ballot persistence.",
                "Designed normalized MySQL database schemas with transactional integrity to prevent duplicate voting and data anomalies."
            ]
        },
        {
            "title": "Package Delivery Tracking System",
            "tech": "Java, Priority Queues, Custom Data Structures, Logistics Logic",
            "bullets": [
                "Developed a logistics transit engine to record shipment checkpoint updates and compute real-time order delivery states.",
                "Implemented priority queue data structures and hash maps for rapid order status lookups and transit logging."
            ]
        },
        {
            "title": "ThinkBoard Collaborative Application",
            "tech": "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
            "bullets": [
                "Architected a responsive collaborative note-taking web application with a modular React frontend and Express REST API.",
                "Integrated MongoDB Mongoose ODM models for persistent document storage, user authentication, and data integrity."
            ]
        }
    ]

    for p in projects:
        story.append(Paragraph(
            f"<b>{p['title']}</b> &nbsp;|&nbsp; <font color='#374151'><i>{p['tech']}</i></font>",
            body_style
        ))
        for pb in p['bullets']:
            story.append(Paragraph(f"• {pb}", bullet_style))
        story.append(Spacer(1, 1.5))

    story.append(Spacer(1, 1.5))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#D1D5DB'), spaceBefore=1, spaceAfter=4))

    # 6. EDUCATION
    story.append(Paragraph("<b>EDUCATION</b>", section_heading))
    edu_line = (
        "<b>Bachelor of Engineering in Computer Science and Engineering</b> <font color='#4B5563'>(Expected 2028)</font><br/>"
        "Dr. N.G.P. Institute of Technology, Coimbatore &nbsp;|&nbsp; <b>Current CGPA: 7.45</b>"
    )
    story.append(Paragraph(edu_line, body_style))
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#D1D5DB'), spaceBefore=2, spaceAfter=4))

    # 7. CERTIFICATIONS & ACHIEVEMENTS
    story.append(Paragraph("<b>CERTIFICATIONS & ACHIEVEMENTS</b>", section_heading))
    items = [
        "<b>Full Stack Development (MERN):</b> Course Certification by Pinesphere Solutions.",
        "<b>NPTEL Certifications:</b> Certified in <i>Cloud Computing</i> and <i>Internet of Things (IoT)</i>.",
        "<b>Paper Presentation:</b> Presented technical paper at Government College of Technology (GCT), Coimbatore.",
        "<b>Workshop:</b> Hands-on participation in Agentic AI workshop at SNS College.",
        "<b>Problem Solving:</b> 127+ LeetCode DSA problems solved (Graphs, Trees, Dynamic Programming, Arrays)."
    ]
    for it in items:
        story.append(Paragraph(f"• {it}", bullet_style))

    # Build document
    doc.build(story)
    print(f"ATS Resume successfully generated at: {output_path}")

if __name__ == '__main__':
    generate_resume('public/resume.pdf')
