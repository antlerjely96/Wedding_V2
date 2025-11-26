Generated Spring Boot backend based on detected form in the uploaded Next.js project.

Detected form file: /mnt/data/extracted_code/components/rsvp-form.tsx
Detected fields: ['attending', 'guests', 'message', 'name', 'side', 'value']

What I generated:
- Maven project (pom.xml)
- application.properties (src/main/resources)
- Main application class
- Entity: FormData with fields above
- Repository, Service, Controller
- Controller endpoint: POST /api/form (accepts JSON matching the entity)

Next steps for you:
1. Put this project in an IDE (IntelliJ/VSCode), ensure Java 17+ and Maven installed.
2. Update DB settings in application.properties (database name, user, password).
3. Run: mvn spring-boot:run
4. From Next.js: POST JSON to http://localhost:8080/api/form

Notes:
- I defaulted all detected fields to String types for simplicity.
- If some fields are nested or arrays, manual adjustment may be needed.
- If I missed fields (forms built dynamically), please tell me or provide the specific form file path.

