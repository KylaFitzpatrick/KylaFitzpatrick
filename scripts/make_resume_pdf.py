from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

EMERALD = HexColor("#059669")
DARK = HexColor("#111827")
GRAY = HexColor("#4B5563")
LIGHT = HexColor("#6B7280")

styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=24, leading=29, textColor=DARK, spaceAfter=4),
    "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=12, leading=15, textColor=EMERALD, spaceAfter=8),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=11.5, textColor=GRAY, spaceAfter=4),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=10.5, textColor=EMERALD, spaceBefore=14, spaceAfter=2),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, textColor=DARK, leading=13.5, alignment=TA_LEFT),
    "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10, textColor=DARK, leading=13),
    "meta": ParagraphStyle("meta", fontName="Helvetica", fontSize=8.5, textColor=LIGHT, spaceAfter=2),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.5, textColor=GRAY, leading=13, leftIndent=12, bulletIndent=2),
}

story = []
def section(label):
    story.append(Paragraph(label.upper(), styles["section"]))
    story.append(HRFlowable(width="100%", thickness=0.7, color=EMERALD, spaceAfter=5))

story.append(Paragraph("KYLA FITZPATRICK", styles["name"]))
story.append(Paragraph("Software Engineer — 8 years in QA &amp; engineering", styles["title"]))
story.append(Paragraph(
    "704.748.3653 &nbsp;|&nbsp; kfitzpatrick44@gmail.com &nbsp;|&nbsp; github.com/KylaFitzpatrick &nbsp;|&nbsp; linkedin.com/in/kylaannefitzpatrick",
    styles["contact"]))

section("Summary")
story.append(Paragraph(
    "Software engineer leveraging 8 years of experience in QA and collaboration in engineering environments — "
    "currently Software Engineer III at Walmart Global Tech. Also designs and ships fast, modern, production-ready "
    "websites end to end, pairing a modern React stack with an AI-augmented workflow (Emergent, Claude) and Adobe design tooling.",
    styles["body"]))

section("Selected Work")
projects = [
    ("Chill Flows", "chillflows.com", "A social wellness community for mind, body and soul — journaling with an AI Ayurvedic guide, dosha-matched yoga flows, meditations and a shared ritual feed. Shipped with iOS &amp; Android app onboarding."),
    ("Grá Creation", "gracreation.com", "An independent Irish atelier for music, photography and visual artwork — artist accounts, a shoppable collection, watermarking and hand-released pieces sold directly from the artist."),
    ("Bloomers LKN", "bloomerslkn.com", "A warm, conversion-focused site for a woman-owned plantscape design &amp; installation studio in Lake Norman — services, project gallery and a consult inquiry flow that turns visitors into clients."),
]
for name, domain, desc in projects:
    story.append(Paragraph(f'{name} &nbsp;<font color="#059669" size="8.5">{domain}</font>', styles["role"]))
    story.append(Paragraph(desc, styles["body"]))
    story.append(Spacer(1, 4))

section("Technical Skills")
skills = [
    ("Languages &amp; Frameworks", "JavaScript (ES6+), TypeScript, Python, C#, SQL, HTML5 &amp; CSS3, React, Node.js, Express, GraphQL"),
    ("Testing &amp; Platforms", "Cypress, TestCafe, Selenium, Pytest, Postman, Docker, AWS, Jenkins, MongoDB, Git &amp; GitHub"),
    ("AI &amp; Design Craft", "Emergent, Claude, Adobe Photoshop, Adobe Express, Figma, Prompt Engineering"),
]
for label, items in skills:
    story.append(Paragraph(f"<b>{label}:</b> <font color='#4B5563'>{items}</font>", styles["body"]))
    story.append(Spacer(1, 2))

section("Experience")
experience = [
    ("Software Engineer III", "Walmart Global Tech", "Sunnyvale, CA · 2024 — Present", [
        "Contributed to creating end-to-end test scripts with TypeScript and TestCafe",
        "Owned end-to-end testing for new features in collaboration with cross-functional teams",
        "Utilized Sauce Labs for mobile test execution on iOS and Android devices"]),
    ("Software Development Test Engineer", "Encoura", "Remote · 2021 — 2022", [
        "Created REST API and GraphQL automated test scripts with Python and Pytest",
        "Learned load testing with Locust and Blazemeter in collaboration with colleagues",
        "Built Python test scripts and framework to verify GraphQL queries and mutations"]),
    ("Software Development Engineer in Test", "Koupon", "Remote · 2020 — 2021", [
        "Created and maintained Cypress end-to-end automated test scripts",
        "Deployed builds to QA environments with Jenkins",
        "Assisted in creating API automated test scripts in JavaScript, TypeScript and Mocha"]),
    ("Software Engineer in Test", "CoStar Group", "Austin, TX · 2019", [
        "Created and maintained UI automated test scripts in an Agile SDLC",
        "Built automated test suites with Visual Studio and Selenium",
        "Documented and tracked bugs in TFS with developers and product on an agile team"]),
    ("Junior Software Development Engineer in Test", "ESO", "Austin, TX · 2018", [
        "Executed functional and regression tests for fire department applications in an Agile SDLC",
        "Leveraged Postman for API testing and Sauce Labs for cross-browser and device testing",
        "Documented bugs in Jira in collaboration with developers and product"]),
    ("Quality Assurance Engineer", "CoStar Group", "Austin, TX · 2016 — 2018", [
        "Created and maintained UI automated test scripts in an Agile SDLC",
        "Learned automation testing with Visual Studio, Selenium, SpecFlow, Git Extensions and C#",
        "Created SQL statements to validate data in a SQL database"]),
    ("Associate Quality Assurance Engineer", "CoStar Group", "San Francisco, CA · 2016", [
        "Created and executed test cases per business requirements in an Agile SDLC",
        "Collaborated with developers and designers to document and resolve bugs in TFS",
        "Functional testing in Firefox, Internet Explorer and Chrome, plus iOS and Android devices"]),
    ("Junior Quality Assurance Analyst", "CITCO", "Charlotte, NC · 2014 — 2015", [
        "Analyzed test scenarios and cases in HP Quality Center and logged defects during functional testing",
        "Liaised with developers to ensure testing accuracy for over four hedge fund applications",
        "Developed and executed ad hoc and regression tests across all stages of an Agile SDLC"]),
]
for role, company, meta, points in experience:
    story.append(Paragraph(f'{role} <font color="#059669">— {company}</font>', styles["role"]))
    story.append(Paragraph(meta, styles["meta"]))
    for p in points:
        story.append(Paragraph(p, styles["bullet"], bulletText="•"))
    story.append(Spacer(1, 5))

section("Education")
story.append(Paragraph("Bootcamp in Full Stack Web Development", styles["role"]))
story.append(Paragraph("University of Texas — Austin, TX · A 6-month program focused on learning technical programming skills", styles["body"]))
story.append(Spacer(1, 5))
story.append(Paragraph("B.S. Business Administration, International Business", styles["role"]))
story.append(Paragraph("The University of North Carolina at Charlotte — Charlotte, NC", styles["body"]))

doc = SimpleDocTemplate(
    "/app/frontend/public/KylaFitzpatrick_Resume.pdf",
    pagesize=letter,
    leftMargin=0.75 * inch, rightMargin=0.75 * inch,
    topMargin=0.6 * inch, bottomMargin=0.6 * inch,
    title="Kyla Fitzpatrick — Resume",
    author="Kyla Fitzpatrick",
)
doc.build(story)
print("PDF generated")
