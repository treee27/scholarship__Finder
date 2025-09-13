var style = document.createElement('style');
        var position = 'right';

        const scholarships = [
            {
                name: "Mahadbt Scholarship",
                type: "merit",
                deadline: "2025-03-15",
                eligibility: "gpa",
                link: "https://mahadbt.maharashtra.gov.in/Login",
                category: "ALL",
                gender: "ALL"
            },
            {
                name: "Cummins Scholarship",
                type: "need",
                deadline: "2025-04-01",
                eligibility: "financial",
                category: "ALL",
                gender: "ALL",
                link: "https://www.cummins.com/en/in/company/corporate-responsibility/global-impact/projects/higher-education/india-scholarship-program"
            },
            {
                name: "Reliance Scholarship",
                type: "merit",
                deadline: "2025-02-28",
                eligibility: "gpa",
                gender: "ALL",
                link: "https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx",
                category: "{SC,ST,OBC}"
            },
            {
                name: "Idfc First Bank Scholarship",
                type: "merit",
                deadline: "2025-02-15",
                eligibility: "financial",
                gender: "ALL",
                link: "https://www.idfcfirstbank.com/csr-activities/educational-initiatives/engineering-scholarship-program",
                category: "{ST,ST}"
            },
            {
                name: "Prime Minister scholarship scheme",
                type: "merit",
                deadline: "2025-03-15",
                eligibility: "financial",
                gender: 'ALL',
                link: "https://www.desw.gov.in/prime-ministers-scholarship-scheme-pmss",
                category: "{SC,ST,OBC}"
            },
            {
                name: "Dr. Punjabrao Deshmukh hostel allowance scholarship",
                type: "merit",
                deadline: "2025-03-15",
                eligibility: "financial",
                gender: 'ALL',
                link: "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA5337B52CE309785#:~:text=Hostel%20maintenance%20allowance%20for%20student's,10months%20in%20a%20academic%20year).",
                category: "{SC,ST,OBC}"
            },
            {
                name: "AICTE – Pragati Scholarship Scheme For Girl Students",
                type: "merit",
                deadline: "2025-03-15",
                eligibility: "GPA",
                gender: 'FEMALE',
                link: "http://www.aicte-india.org/downloads/About%20the%20Scheme_ps_16.pdf",
                category: "{SC,ST,OBC}"
            },
            {
                name: "Rajarshri Chattrapati Shahu Mahraj scholarship ",
                type: "merit",
                deadline: "2025-03-15",
                eligibility: "financial",
                gender: 'ALL',
                link: "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4CECAB91C2B36920",
                category: "GENERAL only."
            },
            {
                name: "Government Research Adhichatra, Maharashtra 2024-25",
                type: "merit",
                deadline: "2025-04-15",
                eligibility: "GPA",
                gender: 'ALL',
                link: "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA7F7B18C7EA3C817",
                category: "{SC,ST,OBC}"
            },
            {
                name: "JK Tyre Shiksha Sarthi Scholarship Program 2024-25",
                type: "need",
                deadline: "2025-04-15",
                eligibility: "GPA",
                gender: 'FEMALE',
                link: "https://theglobalscholarship.org/scholarships/jk-tyre-shiksha-sarthi-scholarship?source=main",
                category: "ALL"
            }
        ];

        // Function to calculate remaining days
        function getRemainingDays(deadline) {
            const currentDate = new Date();
            const deadlineDate = new Date(deadline);
            const timeDifference = deadlineDate - currentDate;
            const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            return daysRemaining >= 0 ? daysRemaining : -1; // -1 means expired
        }

        // Function to display scholarships
        function displayScholarships(filteredScholarships) {
            const scholarshipList = document.getElementById("scholarshipList");
            scholarshipList.innerHTML = "";

            if (filteredScholarships.length === 0) {
                scholarshipList.innerHTML = "<li>No scholarships found matching the criteria.</li>";
                return;
            }

            filteredScholarships.forEach(scholarship => {
                const li = document.createElement("li");
                const daysRemaining = getRemainingDays(scholarship.deadline);
                const isExpired = daysRemaining === -1;

                // Check if scholarship is saved
                const savedScholarships = JSON.parse(localStorage.getItem('savedScholarships')) || [];
                const isSaved = savedScholarships.includes(scholarship.name);

                // Share message for WhatsApp
                const shareText = `${scholarship.name} - Type: ${scholarship.type === "merit" ? "Merit-Based" : "Need-Based"}, Deadline: ${new Date(scholarship.deadline).toLocaleDateString()}, Eligibility: ${scholarship.eligibility === "gpa" ? "GPA-Based" : "Financial Need"}, Category: ${scholarship.category}, Gender: ${scholarship.gender}, Link: ${scholarship.link}`;
                const encodedShareText = encodeURIComponent(shareText);

                li.innerHTML = `
                    <h3>${scholarship.name}</h3>
                    <p>Type: ${scholarship.type === "merit" ? "Merit-Based" : "Need-Based"}</p>
                    <p>Deadline: ${new Date(scholarship.deadline).toLocaleDateString()}</p>
                    <p>Eligibility: ${scholarship.eligibility === "gpa" ? "GPA-Based" : "Financial Need"}</p>
                    <p>Category: ${scholarship.category}</p>
                    <p>Gender: ${scholarship.gender}</p>
                    <p class="days-remaining ${isExpired ? 'expired' : ''}">
                        ${isExpired ? 'Expired' : `${daysRemaining} days remaining`}
                    </p>
                    <div style="display: flex; gap: 10px; margin-top: 10px;">
                        <a href="https://api.whatsapp.com/send?text=${encodedShareText}" target="_blank" class="share-whatsapp">Share on WhatsApp</a>
                        <button class="save-button ${isSaved ? 'saved' : ''}" onclick="saveScholarship('${scholarship.name}', this)">${isSaved ? 'Saved' : 'Save'}</button>
                    </div>
                `;
                li.addEventListener("click", (e) => {
                    if (!e.target.classList.contains('share-whatsapp') && !e.target.classList.contains('save-button')) {
                        showDetails(scholarship);
                    }
                });
                scholarshipList.appendChild(li);
            });
        }

        // Function to show scholarship details
        function showDetails(scholarship) {
            const detailsPage = document.getElementById("detailsPage");
            const scholarshipList = document.getElementById("scholarshipList");

            scholarshipList.style.display = "none";
            detailsPage.style.display = "block";

            const daysRemaining = getRemainingDays(scholarship.deadline);
            const isExpired = daysRemaining === -1;

            document.getElementById("detailsTitle").textContent = scholarship.name;
            document.getElementById("detailsType").textContent = scholarship.type === "merit" ? "Merit-Based" : "Need-Based";
            document.getElementById("detailsDeadline").textContent = new Date(scholarship.deadline).toLocaleDateString();
            document.getElementById("detailsEligibility").textContent = scholarship.eligibility === "gpa" ? "GPA-Based" : "Financial Need";
            document.getElementById("detailsCategory").textContent = scholarship.category;
            document.getElementById("detailsGender").textContent = scholarship.gender;
            document.getElementById("detailsDaysRemaining").textContent = isExpired ? 'Expired' : `${daysRemaining} days remaining`;
            document.getElementById("detailsLink").href = scholarship.link;
            document.getElementById("detailsLink").textContent = isExpired ? 'Apply Now (Expired)' : 'Apply Now';
            document.getElementById("detailsLink").classList.toggle('disabled', isExpired);
        }

        // Function to go back to the list
        function goBack() {
            const detailsPage = document.getElementById("detailsPage");
            const scholarshipList = document.getElementById("scholarshipList");

            detailsPage.style.display = "none";
            scholarshipList.style.display = "grid";
        }

        // Function to filter scholarships
        function filterScholarships() {
            const searchText = document.getElementById("searchInput").value.toLowerCase();
            const typeFilter = document.getElementById("typeFilter").value;
            const deadlineFilter = document.getElementById("deadlineFilter").value;
            const eligibilityFilter = document.getElementById("eligibilityFilter").value;
            const categoryFilter = document.getElementById("categoryFilter").value;
            const gender = document.getElementById('gender').value;

            const filteredScholarships = scholarships.filter(scholarship => {
                const matchesSearch = scholarship.name.toLowerCase().includes(searchText);
                const matchesType = typeFilter ? scholarship.type === typeFilter : true;
                const matchesEligibility = eligibilityFilter ? scholarship.eligibility === eligibilityFilter : true;
                const matchesCategory = categoryFilter ? scholarship.category.includes(categoryFilter) : true;
                const matchGender = gender ? scholarship.gender.includes(gender) : true;

                // Deadline filter logic
                const currentDate = new Date();
                const scholarshipDeadline = new Date(scholarship.deadline);
                let matchesDeadline = true;
                if (deadlineFilter === "upcoming") {
                    matchesDeadline = scholarshipDeadline > currentDate;
                } else if (deadlineFilter === "past") {
                    matchesDeadline = scholarshipDeadline < currentDate;
                }

                return matchesSearch && matchesType && matchesEligibility && matchesDeadline && matchesCategory && matchGender;
            });

            displayScholarships(filteredScholarships);
        }

        // Function to clear all filters
        function clearFilters() {
            document.getElementById("searchInput").value = "";
            document.getElementById("typeFilter").value = "";
            document.getElementById("deadlineFilter").value = "";
            document.getElementById("eligibilityFilter").value = "";
            document.getElementById("categoryFilter").value = "";
            document.getElementById('gender').value = "";
            displayScholarships(scholarships);
        }

        // Function to save scholarship
        function saveScholarship(scholarshipName, button) {
            const savedScholarships = JSON.parse(localStorage.getItem('savedScholarships')) || [];

            if (!savedScholarships.includes(scholarshipName)) {
                savedScholarships.push(scholarshipName);
                localStorage.setItem('savedScholarships', JSON.stringify(savedScholarships));
                button.textContent = 'Saved';
                button.classList.add('saved');
                alert(`"${scholarshipName}" has been saved!`);
            } else {
                alert(`"${scholarshipName}" is already saved.`);
            }
        }

        // Chatbot Functions
        function toggleChatbot() {
            const chatbotWindow = document.getElementById("chatbot-window");
            chatbotWindow.classList.toggle("chatbot-hidden");
            if (!chatbotWindow.classList.contains("chatbot-hidden")) {
                addMessage("Hello! How can I assist you with scholarships today?", "bot");
            }
        }

        function addMessage(message, sender) {
            const messagesDiv = document.getElementById("chatbot-messages");
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("chatbot-message", sender);
            messageDiv.textContent = message;
            messagesDiv.appendChild(messageDiv);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        function sendMessage() {
            const input = document.getElementById("chatbot-input");
            const message = input.value.trim().toLowerCase();
            if (!message) return;

            addMessage(message, "user");
            input.value = "";

            // Simple chatbot responses
            if (message.includes("hi") || message.includes("hello")) {
                addMessage("Hi there! How can I help you with scholarships?", "bot");
            } else if (message.includes("how") && message.includes("apply")) {
                addMessage("Click on a scholarship and use the 'Apply Now' link to visit the official site.", "bot");
            } else if (message.includes("female")) {
                const femaleScholarships = scholarships.filter(s => s.gender === "FEMALE");
                addMessage(`Scholarships for female students: ${femaleScholarships.map(s => s.name).join(", ")}.`, "bot");
            } else if (message.includes("deadline") && message.includes("mahadbt")) {
                const mahadbt = scholarships.find(s => s.name.toLowerCase().includes("mahadbt"));
                addMessage(`The deadline for Mahadbt Scholarship is ${new Date(mahadbt.deadline).toLocaleDateString()}.`, "bot");
            } else {
                addMessage("I’m not sure how to answer that. Try asking about scholarships or deadlines!", "bot");
            }
        }

        // Event listeners
        document.getElementById("searchInput").addEventListener("input", filterScholarships);
        document.getElementById("typeFilter").addEventListener("change", filterScholarships);
        document.getElementById("deadlineFilter").addEventListener("change", filterScholarships);
        document.getElementById("eligibilityFilter").addEventListener("change", filterScholarships);
        document.getElementById("categoryFilter").addEventListener("change", filterScholarships);
        document.getElementById('gender').addEventListener('change', filterScholarships);
        document.getElementById("chatbot-input").addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendMessage();
        });

        // Initial display of all scholarships
        document.addEventListener('DOMContentLoaded', function() {
            displayScholarships(scholarships);
        });

        // Dark mode toggle
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }
