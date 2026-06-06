/* ========================================================
   BCA EXAM WAR ROOM — COMPLETE SCRIPT
   UTU Semester IV · Syllabus extracted from official PDF
   ======================================================== */

// ── SYLLABUS DATA (from official UTU BCA PDF) ──────────────
const SYLLABUS = {
  "BCAT016": {
    code: "BCAT 016", name: "Operating Systems", semester: 4,
    priority: "very-high", priorityRank: 1, isBacklog: false,
    units: [
      { id: "OS_U1", name: "UNIT-I: OS Introduction & Structures",
        topics: [
          { id: "OS_U1_T1", title: "Operating System Introduction", subtopics: "Definition, Goals, Evolution, Types of OS" },
          { id: "OS_U1_T2", title: "OS Structures", subtopics: "Simple Batch, Multiprogrammed, Time-shared, Personal Computer" },
          { id: "OS_U1_T3", title: "Parallel & Distributed Systems", subtopics: "Parallel Systems, Distributed Systems, Real-Time Systems" },
          { id: "OS_U1_T4", title: "System Components & Services", subtopics: "OS Components, OS Services, System Programs" },
          { id: "OS_U1_T5", title: "System Calls", subtopics: "Types, API Interface, System Call Implementation" }
        ]
      },
      { id: "OS_U2", name: "UNIT-II: Process & CPU Scheduling",
        topics: [
          { id: "OS_U2_T1", title: "Process Concepts & Operations", subtopics: "Process Definition, Process State, PCB, Operations on Processes" },
          { id: "OS_U2_T2", title: "Cooperating Processes & Threads", subtopics: "Independent vs Cooperating, Thread Concepts, Benefits of Threads" },
          { id: "OS_U2_T3", title: "Interprocess Communication (IPC)", subtopics: "Shared Memory, Message Passing, Direct/Indirect Communication" },
          { id: "OS_U2_T4", title: "CPU Scheduling Criteria & Algorithms", subtopics: "FCFS, SJF, Priority, Round Robin, Multilevel Queue" },
          { id: "OS_U2_T5", title: "Multiple-Processor Scheduling", subtopics: "Homogeneous Processors, Asymmetric vs Symmetric Multiprocessing" },
          { id: "OS_U2_T6", title: "System Calls for Process Management", subtopics: "fork(), exit(), wait(), waitpid(), exec()" }
        ]
      },
      { id: "OS_U3", name: "UNIT-III: Deadlocks & Synchronization",
        topics: [
          { id: "OS_U3_T1", title: "Deadlocks - System Model & Characterization", subtopics: "Resources, Deadlock Conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait" },
          { id: "OS_U3_T2", title: "Methods for Handling Deadlocks", subtopics: "Prevention, Avoidance (Banker's Algorithm), Detection and Recovery" },
          { id: "OS_U3_T3", title: "Critical Section Problem", subtopics: "Requirements, Peterson's Solution, Mutex Locks" },
          { id: "OS_U3_T4", title: "Synchronization Hardware & Semaphores", subtopics: "TestAndSet, Swap Instructions, Counting Semaphores, Binary Semaphores" },
          { id: "OS_U3_T5", title: "Classical Synchronization Problems", subtopics: "Bounded Buffer, Readers-Writers, Dining Philosophers" },
          { id: "OS_U3_T6", title: "Monitors & IPC Mechanisms", subtopics: "Monitor Definition, Condition Variables, Pipes, FIFOs, Message Queues, Shared Memory" }
        ]
      },
      { id: "OS_U4", name: "UNIT-IV: Memory Management & Virtual Memory",
        topics: [
          { id: "OS_U4_T1", title: "Logical vs Physical Address Space & Swapping", subtopics: "Address Binding, Dynamic Loading, Dynamic Linking, Swapping" },
          { id: "OS_U4_T2", title: "Contiguous Allocation & Paging", subtopics: "Fixed/Variable Partitioning, Fragmentation, Paging Concept, Page Tables" },
          { id: "OS_U4_T3", title: "Segmentation & Segmentation with Paging", subtopics: "Segment Table, Intel Pentium Segmentation" },
          { id: "OS_U4_T4", title: "Demand Paging", subtopics: "Page Fault, Copy-on-Write, Performance of Demand Paging" },
          { id: "OS_U4_T5", title: "Page Replacement Algorithms", subtopics: "FIFO, Optimal, LRU, LFU, Clock Algorithm, Thrashing" }
        ]
      },
      { id: "OS_U5", name: "UNIT-V: File System",
        topics: [
          { id: "OS_U5_T1", title: "File System Interface & Access Methods", subtopics: "File Attributes, Operations, Types, Sequential/Direct/Indexed Access" },
          { id: "OS_U5_T2", title: "Directory Structure", subtopics: "Single-Level, Two-Level, Tree-Structured, Acyclic-Graph Directories" },
          { id: "OS_U5_T3", title: "File System Structure & Implementation", subtopics: "Layered File System, File System Mounting, Virtual File System" },
          { id: "OS_U5_T4", title: "Allocation Methods", subtopics: "Contiguous, Linked, Indexed Allocation" },
          { id: "OS_U5_T5", title: "Free-space Management & System Calls", subtopics: "Bit Vector, Linked List, Grouping; open(), create(), read(), write(), close(), lseek(), stat(), ioctl()" }
        ]
      }
    ]
  },

  "BCAT017": {
    code: "BCAT 017", name: "Computer Network", semester: 4,
    priority: "very-high", priorityRank: 2, isBacklog: false,
    units: [
      { id: "CN_U1", name: "UNIT-I: Introduction & Physical Layer",
        topics: [
          { id: "CN_U1_T1", title: "Network Applications & Reference Models", subtopics: "Network Applications, Hardware/Software Overview, OSI Model, TCP/IP Model" },
          { id: "CN_U1_T2", title: "Connection Oriented Networks", subtopics: "X.25, Frame Relay, Internet Basics" },
          { id: "CN_U1_T3", title: "Physical Layer Theory", subtopics: "Fourier Analysis, Bandwidth, Maximum Data Rate, Shannon Capacity" },
          { id: "CN_U1_T4", title: "Guided Transmission Media", subtopics: "Twisted Pair, Coaxial Cable, Fiber Optics" },
          { id: "CN_U1_T5", title: "Wireless Transmission & Telephone Networks", subtopics: "Radio, Microwave, Infrared; PSTN, Mobile Telephone System" }
        ]
      },
      { id: "CN_U2", name: "UNIT-II: Data Link & MAC Layer",
        topics: [
          { id: "CN_U2_T1", title: "Data Link Layer Design Issues", subtopics: "Services, Framing, Error Control, Flow Control" },
          { id: "CN_U2_T2", title: "Error Detection & Correction", subtopics: "Parity Check, CRC, Checksum, Hamming Code" },
          { id: "CN_U2_T3", title: "Elementary & Sliding Window Protocols", subtopics: "Stop-and-Wait, Go-Back-N, Selective Repeat" },
          { id: "CN_U2_T4", title: "Example Data Link Protocols", subtopics: "HDLC, PPP, Data Link Layer in Internet" },
          { id: "CN_U2_T5", title: "Channel Allocation & Multiple Access", subtopics: "Static/Dynamic Allocation, ALOHA, CSMA, CSMA/CD, CSMA/CA" },
          { id: "CN_U2_T6", title: "Ethernet, Wireless LAN & Bluetooth", subtopics: "Classic Ethernet, IEEE 802.11 Standards, Bluetooth Protocols" }
        ]
      },
      { id: "CN_U3", name: "UNIT-III: Network Layer",
        topics: [
          { id: "CN_U3_T1", title: "Network Layer Design Issues", subtopics: "Store-and-Forward Packet Switching, Services to Transport Layer" },
          { id: "CN_U3_T2", title: "Routing Algorithms", subtopics: "Optimality Principle, Dijkstra's (Link State), Bellman-Ford (Distance Vector), BGP, OSPF" },
          { id: "CN_U3_T3", title: "Congestion Control Algorithms", subtopics: "General Principles, Traffic-Aware Routing, Admission Control, ECN" },
          { id: "CN_U3_T4", title: "Internetworking & IPv4", subtopics: "Tunneling, Fragmentation, NAT, IPv4 Header Format, Subnetting, CIDR" },
          { id: "CN_U3_T5", title: "IPv6 & Quality of Service", subtopics: "IPv6 Features, Header Format, ICMPv6; QoS Requirements, Traffic Shaping" }
        ]
      },
      { id: "CN_U4", name: "UNIT-IV: Transport Layer",
        topics: [
          { id: "CN_U4_T1", title: "Transport Service & Elements", subtopics: "Services, TPDU, Addressing, Connection Establishment/Release" },
          { id: "CN_U4_T2", title: "UDP - User Datagram Protocol", subtopics: "UDP Header, RPC over UDP, Real-Time Protocols" },
          { id: "CN_U4_T3", title: "TCP - Transmission Control Protocol", subtopics: "TCP Segment Header, Connection Management, Sliding Window, Congestion Control, Timer Management" }
        ]
      },
      { id: "CN_U5", name: "UNIT-V: Application Layer",
        topics: [
          { id: "CN_U5_T1", title: "Domain Name System (DNS)", subtopics: "DNS Namespace, Resource Records, Name Servers, Types" },
          { id: "CN_U5_T2", title: "Electronic Mail", subtopics: "Architecture, Message Format, SMTP, POP3, IMAP, MIME" },
          { id: "CN_U5_T3", title: "World Wide Web (HTTP)", subtopics: "Architectural Overview, HTTP Methods, Static/Dynamic Web Documents" },
          { id: "CN_U5_T4", title: "Application Layer Protocols", subtopics: "SNMP, FTP, SMTP, Telnet - Protocol Details and Usage" }
        ]
      }
    ]
  },

  "BCAT018": {
    code: "BCAT 018", name: "Data Science", semester: 4,
    priority: "very-high", priorityRank: 3, isBacklog: false,
    units: [
      { id: "DS_U1", name: "UNIT-I: Data Science Context",
        topics: [
          { id: "DS_U1_T1", title: "Need for Data Science & Overview", subtopics: "Applications, Key Concepts: Data/Information/Knowledge, Role of Data Scientist" },
          { id: "DS_U1_T2", title: "Data Ethics & Privacy", subtopics: "Introduction to Data Ethics, Privacy Principles, GDPR Overview" },
          { id: "DS_U1_T3", title: "Data Science Process", subtopics: "Business Intelligence vs Data Science, Prerequisites, Tools and Skills Required" }
        ]
      },
      { id: "DS_U2", name: "UNIT-II: Databases for Data Science",
        topics: [
          { id: "DS_U2_T1", title: "SQL for Data Science", subtopics: "Basic Statistics with SQL, Data Munging, Filtering, Joins (INNER, OUTER, LEFT, RIGHT)" },
          { id: "DS_U2_T2", title: "SQL Advanced", subtopics: "Aggregation, Window Functions, Ordered Data, Query Optimization" },
          { id: "DS_U2_T3", title: "NoSQL Databases", subtopics: "Document Databases (MongoDB), Wide-column Databases (Cassandra), Graph Databases (Neo4j)" }
        ]
      },
      { id: "DS_U3", name: "UNIT-III: Data Science Methodology",
        topics: [
          { id: "DS_U3_T1", title: "Analytics for Data Science", subtopics: "Types of Analytics: Descriptive, Diagnostic, Predictive, Prescriptive; Examples" },
          { id: "DS_U3_T2", title: "Data Analytics Lifecycle", subtopics: "Data Discovery, Data Preparation, Model Planning, Model Building, Communicate Results" },
          { id: "DS_U3_T3", title: "Text Mining & NLP", subtopics: "Information Retrieval, Data Mining, Natural Language Processing Basics" },
          { id: "DS_U3_T4", title: "Text Analytics Pipeline", subtopics: "Cleaning, Parsing, Searching, Retrieval, Text Mining, POS Tagging, Stemming" }
        ]
      },
      { id: "DS_U4", name: "UNIT-IV: Platform for Data Science (R)",
        topics: [
          { id: "DS_U4_T1", title: "Introduction to R Programming", subtopics: "R Language History, RStudio Setup, Environment, Console Usage" },
          { id: "DS_U4_T2", title: "R Data Types & Structures", subtopics: "Vectors, Matrices, Data Frames, Lists, Factors, Basic Data Types" },
          { id: "DS_U4_T3", title: "Data Import/Export in R", subtopics: "read.csv(), read.table(), write.csv(), Excel files, JSON in R" },
          { id: "DS_U4_T4", title: "dplyr Package", subtopics: "filter(), select(), mutate(), arrange(), summarise(), group_by(), Chaining with pipe (%>%)" },
          { id: "DS_U4_T5", title: "Data Cleaning & Preprocessing", subtopics: "Handling Missing Data (NA), Outlier Detection, Reshaping with tidyr (gather, spread)" }
        ]
      },
      { id: "DS_U5", name: "UNIT-V: Exploratory Data Analysis",
        topics: [
          { id: "DS_U5_T1", title: "Data Visualization Techniques", subtopics: "Box Plots, Histograms, Scatter Plots, Bar Charts, Heatmaps" },
          { id: "DS_U5_T2", title: "Correlation & Covariance", subtopics: "Pearson/Spearman Correlation, Covariance Matrix, Interpretation" },
          { id: "DS_U5_T3", title: "ggplot2 for Visualization", subtopics: "Grammar of Graphics, Layers, Geoms (geom_point, geom_bar, geom_histogram)" },
          { id: "DS_U5_T4", title: "Advanced ggplot2 & EDA", subtopics: "Faceting, Themes, Customizing Plots, Incorporating EDA Insights" }
        ]
      }
    ]
  },

  "BCAP015": {
    code: "BCAP 015", name: "Critical Thinking", semester: 4,
    priority: "low", priorityRank: 6, isBacklog: false,
    units: [
      { id: "CT_U1", name: "UNIT 1: Critical Thinking Foundations",
        topics: [
          { id: "CT_U1_T1", title: "Critical Thinking - Importance & Process", subtopics: "Definition, Significance, Steps in Critical Thinking Process" },
          { id: "CT_U1_T2", title: "Barriers to Critical Thinking", subtopics: "Cognitive Biases, Emotional Barriers, Social Pressures, Media Influence" }
        ]
      },
      { id: "CT_U2", name: "UNIT 2: Arguments",
        topics: [
          { id: "CT_U2_T1", title: "Argument vs Opinion", subtopics: "Difference between Argument, Opinion, and Fact" },
          { id: "CT_U2_T2", title: "Types of Arguments & Valid Patterns", subtopics: "Deductive, Inductive, Abductive Arguments; Modus Ponens, Modus Tollens" }
        ]
      },
      { id: "CT_U3", name: "UNIT 3: Fallacies & Biases",
        topics: [
          { id: "CT_U3_T1", title: "Types of Logical Fallacies", subtopics: "Ad Hominem, Straw Man, False Dichotomy, Circular Reasoning, Slippery Slope" },
          { id: "CT_U3_T2", title: "Social Influences on Critical Thinking", subtopics: "Peer Pressure, Social Media, Groupthink, Echo Chambers" }
        ]
      },
      { id: "CT_U4", name: "UNIT 4 & 5: Academic Writing & Arguments",
        topics: [
          { id: "CT_U4_T1", title: "Critical Thinking in Reading/Writing/Speaking", subtopics: "Evaluating Sources, Active Reading, Argumentative Writing, Public Speaking" },
          { id: "CT_U4_T2", title: "Constructing Academic Arguments", subtopics: "Word Choice, Hedging Language, Using Evidence, Integrating Quotations" },
          { id: "CT_U4_T3", title: "Avoiding Plagiarism & Critical Review", subtopics: "Citation Practices, Paraphrasing, Summarizing, Critical Review Structure" }
        ]
      }
    ]
  },

  "BCAT021": {
    code: "BCAT 021", name: "Human Values", semester: 4,
    priority: "low", priorityRank: 7, isBacklog: false,
    units: [
      { id: "HV_U1", name: "UNIT I: Ethics - Foundations",
        topics: [
          { id: "HV_U1_T1", title: "Ethics - Definition & Relevance", subtopics: "Definitional Aspects of Ethics, Relevance in Society, Scope of Ethics" }
        ]
      },
      { id: "HV_U2", name: "UNIT II: Philosophical Basis of Ethics",
        topics: [
          { id: "HV_U2_T1", title: "Moral Philosophy & Personal Ethics", subtopics: "Philosophical Basis, Considerations on Moral Philosophy, Personal and Family Ethics" }
        ]
      },
      { id: "HV_U3", name: "UNIT III: Ethics in Public Affairs",
        topics: [
          { id: "HV_U3_T1", title: "Ethics for Elected Representatives & Bureaucracy", subtopics: "Standards for Representatives, Ethics for Bureaucracy, Police, Coercive Authority" },
          { id: "HV_U3_T2", title: "Basic Values in Civil Services", subtopics: "Dispassion, Non-partisanship, Moral Integrity, Objectivity, Dedication to Public Service, Non-corruptibility" }
        ]
      },
      { id: "HV_U4", name: "UNIT IV: Ethics & Professions",
        topics: [
          { id: "HV_U4_T1", title: "Professional Ethics", subtopics: "Ethical Values in Legal, Medical, Engineering Professions" },
          { id: "HV_U4_T2", title: "Ethics at the Workplace", subtopics: "Cybercrime, Plagiarism, Sexual Misconduct, Fraudulent Use of Resources" }
        ]
      }
    ]
  },

  "BCAT006": {
    code: "BCAT 006", name: "Data Structures", semester: 2,
    priority: "very-high", priorityRank: 4, isBacklog: true,
    units: [
      { id: "DSA_U1", name: "UNIT-I: C Basics",
        topics: [
          { id: "DSA_U1_T1", title: "C Character Set, Identifiers & Keywords", subtopics: "C Character Set, Identifiers Rules, Reserved Keywords" },
          { id: "DSA_U1_T2", title: "Data Types, Constants, Variables & Arrays", subtopics: "Primitive Types, Constants (int/float/char), Variable Declaration, Array Basics" },
          { id: "DSA_U1_T3", title: "Operators & Expressions", subtopics: "Arithmetic, Unary, Relational, Logical, Assignment, Conditional (ternary), Bitwise Operators" },
          { id: "DSA_U1_T4", title: "Compound Statements & Symbolic Constants", subtopics: "#define, Block Statements, Expressions vs Statements" }
        ]
      },
      { id: "DSA_U2", name: "UNIT-II: Control Structures & Arrays",
        topics: [
          { id: "DSA_U2_T1", title: "Decision Control Structures", subtopics: "if, if-else, Nested if, if-else ladder, switch-case" },
          { id: "DSA_U2_T2", title: "Iterative Statements", subtopics: "for, while, do-while loops; break, continue, goto" },
          { id: "DSA_U2_T3", title: "Storage Classes", subtopics: "auto, register, static, extern - Scope and Lifetime" },
          { id: "DSA_U2_T4", title: "Arrays - 1D and 2D", subtopics: "Declaration, Initialization, 1D Array, 2D Array, Address Calculation of 2D Array" }
        ]
      },
      { id: "DSA_U3", name: "UNIT-III: Functions",
        topics: [
          { id: "DSA_U3_T1", title: "Library & User Defined Functions", subtopics: "Standard Library Functions, Function Definition, Function Declaration/Prototype" },
          { id: "DSA_U3_T2", title: "Arguments & Function Calls", subtopics: "Actual vs Formal Arguments, Call by Value, Call by Reference, Passing Arrays" }
        ]
      },
      { id: "DSA_U4", name: "UNIT-IV: Pointers & Strings",
        topics: [
          { id: "DSA_U4_T1", title: "Pointer Declaration & Arithmetic", subtopics: "Pointer Variables, Pointer Arithmetic, NULL Pointer, Pointer to Array" },
          { id: "DSA_U4_T2", title: "Multiple Return Values & Strings", subtopics: "Returning via Pointers, String Functions: strlen, strcpy, strcat, strcmp" }
        ]
      },
      { id: "DSA_U5", name: "UNIT-V: Structures, Unions & File Handling",
        topics: [
          { id: "DSA_U5_T1", title: "Structures & Unions", subtopics: "Structure Definition, Accessing Members, Array of Structures, Nested Structures, Unions vs Structures" },
          { id: "DSA_U5_T2", title: "Enumerations", subtopics: "enum Declaration, Usage, typedef with enum" },
          { id: "DSA_U5_T3", title: "File Handling", subtopics: "Opening/Closing Files, File Modes (r,w,a,rb,wb), fread/fwrite, fseek, fscanf, fprintf" },
          { id: "DSA_U5_T4", title: "Command Line Arguments & Preprocessors", subtopics: "argc, argv Parameters, #include, #define, #ifdef, #ifndef, #pragma" }
        ]
      }
    ]
  },

  "BCAT008": {
    code: "BCAT 008", name: "OOPS", semester: 2,
    priority: "very-high", priorityRank: 5, isBacklog: true,
    units: [
      { id: "JAVA_U1", name: "UNIT 1: Introduction to Java",
        topics: [
          { id: "JAVA_U1_T1", title: "Java Basics & Data Types", subtopics: "History, JVM, JDK, Bytecode, Data Types, Variables, Literals" },
          { id: "JAVA_U1_T2", title: "Operators & Control Structures", subtopics: "All Operators, Selection (if-else, switch), Looping (for, while, do-while)" },
          { id: "JAVA_U1_T3", title: "Methods, Overloading & Math Class", subtopics: "Method Definition, Method Overloading, Math class methods, Arrays in Java" }
        ]
      },
      { id: "JAVA_U2", name: "UNIT 2: Objects & Classes",
        topics: [
          { id: "JAVA_U2_T1", title: "Classes, Objects & Constructors", subtopics: "Class Definition, Object Creation, Default/Parameterized Constructors, Constructor Chaining" },
          { id: "JAVA_U2_T2", title: "Visibility Modifiers & Methods", subtopics: "public, private, protected, default; Static Methods, Instance Methods" },
          { id: "JAVA_U2_T3", title: "Inbuilt Classes", subtopics: "String, Character, StringBuffer, StringBuilder, File class, this reference" }
        ]
      },
      { id: "JAVA_U3", name: "UNIT 3: Inheritance & Polymorphism",
        topics: [
          { id: "JAVA_U3_T1", title: "Inheritance", subtopics: "Super/Sub Class, extends Keyword, Types of Inheritance, Method Overriding, super Keyword" },
          { id: "JAVA_U3_T2", title: "Polymorphism & Dynamic Binding", subtopics: "Compile-time vs Runtime Polymorphism, Dynamic Method Dispatch, instanceof" },
          { id: "JAVA_U3_T3", title: "Abstract Classes & Interfaces", subtopics: "abstract Keyword, Abstract Methods, Interface Declaration, implements, Multiple Interfaces" },
          { id: "JAVA_U3_T4", title: "Packages", subtopics: "Creating Packages, import Statement, UTIL Package (ArrayList, LinkedList, HashMap)" }
        ]
      },
      { id: "JAVA_U4", name: "UNIT 4: Event & GUI Programming",
        topics: [
          { id: "JAVA_U4_T1", title: "Event Handling", subtopics: "Event Model, Event Types, ActionListener, MouseListener, KeyListener" },
          { id: "JAVA_U4_T2", title: "GUI Basics - Frames & Panels", subtopics: "JFrame, JPanel, Layout Managers: FlowLayout, BorderLayout, GridLayout" },
          { id: "JAVA_U4_T3", title: "GUI Components", subtopics: "JButton, JCheckBox, JRadioButton, JLabel, JTextField, JTextArea, JComboBox" },
          { id: "JAVA_U4_T4", title: "Applets & Swing", subtopics: "Applet Life Cycle, JApplet, Introduction to Swing Components, JDialog, JMenu" }
        ]
      },
      { id: "JAVA_U5", name: "UNIT 5: I/O Programming",
        topics: [
          { id: "JAVA_U5_T1", title: "Text & Binary I/O", subtopics: "InputStream, OutputStream, FileInputStream, FileOutputStream, BufferedReader, PrintWriter" },
          { id: "JAVA_U5_T2", title: "Binary I/O Classes & Object I/O", subtopics: "DataInputStream, DataOutputStream, ObjectInputStream, ObjectOutputStream, Serialization" },
          { id: "JAVA_U5_T3", title: "Random Access Files", subtopics: "RandomAccessFile class, seek(), read(), write() for random access" }
        ]
      },
      { id: "JAVA_U6", name: "UNIT 6: Multithreading",
        topics: [
          { id: "JAVA_U6_T1", title: "Thread Life Cycle & Methods", subtopics: "Thread States, Thread class, Runnable Interface, start(), run(), sleep(), join(), yield()" },
          { id: "JAVA_U6_T2", title: "Thread Synchronization", subtopics: "synchronized keyword, wait(), notify(), notifyAll(), Deadlock in Threads" },
          { id: "JAVA_U6_T3", title: "Exception Handling & Collections", subtopics: "try-catch-finally, throws, Custom Exceptions; Collections: List, Set, Map, Iterator" }
        ]
      }
    ]
  }
};

// ── MOTIVATIONAL MESSAGES ──────────────────────────────────
const MOTIVATIONS = [
  "Exam is temporary, backlog is painful. Clear it NOW.",
  "Finish today's target before sleeping. No excuses.",
  "Priority subjects first. Always. Every single day.",
  "OS + Networks are your highest priority. Master them.",
  "One topic at a time. Consistent effort beats cramming.",
  "Your backlog is a debt. Pay it before it accumulates interest.",
  "The student who studies daily owns exam season.",
  "Data Structures is foundational. Don't skip any unit.",
  "Java OOP concepts compound. Understand, don't memorize.",
  "Network layers are like floors of a building. Know each one.",
  "Process scheduling algorithms: draw diagrams. See the flow.",
  "Revision 1 → Revision 2 → Revision 3. That's how you retain.",
  "Every weak topic is a ticking bomb. Defuse it today.",
  "Don't just read. Write. Code. Explain out loud.",
  "Sleep is part of the study plan. Rest is not weakness.",
  "Water, protein, study. The BCA warrior's trinity.",
  "The Banker's Algorithm won't solve itself. Practice it.",
  "TCP 3-way handshake: SYN → SYN-ACK → ACK. Memorize it.",
  "SQL joins and window functions are Data Science essentials.",
  "Your gym streak and study streak run parallel. Build both.",
  "The exam doesn't care about your mood. Study anyway.",
  "5 units per subject. Break them down. Conquer them one by one.",
  "Deadlock prevention ≠ deadlock avoidance. Know the difference.",
  "R programming: dplyr and ggplot2 are your weapons.",
  "Critical thinking exam is low stakes. Don't let it eat your time.",
  "Human Values: 4 units, conceptual. Quick revision is enough.",
  "The more you revise, the less you panic on exam day.",
  "Don't compare your chapter 1 to someone else's chapter 10.",
  "A warrior prepares in silence and speaks through results.",
  "Today's effort is tomorrow's confidence.",
  "You know more than you think you do. Trust the process.",
  "Mark weak topics immediately. Go back to them. Beat them.",
  "Assignment submitted = XP gained. Don't leave it pending.",
  "The best time to start was yesterday. Next best: RIGHT NOW.",
  "Memory management: paging, segmentation, virtual memory. All in.",
  "Network routing algorithms: Dijkstra's vs Distance Vector. Both.",
  "IPv4 vs IPv6 differences are exam favorites. Know them cold.",
  "Creatine + protein + hydration = brain that absorbs faster.",
  "Gym day doesn't cancel study day. 1 hour workout, 4 hours study.",
  "Your readiness score is real. Push it above 80% before exams.",
  "Every completed topic brings the readiness bar closer to 100%.",
  "FCFS, SJF, RR, Priority. Solve Gantt charts. Daily.",
  "File system allocation methods: know contiguous vs linked vs indexed.",
  "Data Science lifecycle: memorize the 5 phases. Draw it.",
  "Thread synchronization is tricky. Practice the dining philosophers.",
  "Interfaces in Java: understand why, not just how.",
  "The War Room never sleeps. But you must — 7 hours minimum.",
  "Your future self is watching what you do today.",
  "Warriors don't wait for motivation. They build discipline.",
  "Day by day. Unit by unit. Topic by topic. Victory is inevitable."
];

// ── ACHIEVEMENTS ──────────────────────────────────────────
const ACHIEVEMENTS = [
  { id: "first_topic", icon: "🎯", name: "First Blood", desc: "Complete your first topic", condition: d => d.completedTopics >= 1 },
  { id: "first_revision", icon: "🔄", name: "First Revision Complete", desc: "Complete first revision of any topic", condition: d => Object.values(d.topics||{}).some(t=>t.r1) },
  { id: "ten_topics", icon: "💥", name: "10 Topics Down", desc: "Complete 10 topics", condition: d => d.completedTopics >= 10 },
  { id: "twenty_five_topics", icon: "🚀", name: "Quarter Century", desc: "Complete 25 topics", condition: d => d.completedTopics >= 25 },
  { id: "fifty_topics", icon: "⚡", name: "Halfway Warrior", desc: "Complete 50 topics", condition: d => d.completedTopics >= 50 },
  { id: "all_topics", icon: "🏆", name: "SYLLABUS CONQUERED", desc: "Complete all topics", condition: d => d.completedTopics >= d.totalTopics },
  { id: "study_5h", icon: "⏱️", name: "5 Study Hours", desc: "Log 5 total study hours", condition: d => d.totalStudyHours >= 5 },
  { id: "study_10h", icon: "🔥", name: "10 Study Hours", desc: "Log 10 total study hours", condition: d => d.totalStudyHours >= 10 },
  { id: "study_50h", icon: "💎", name: "50 Study Hours", desc: "Log 50 total study hours", condition: d => d.totalStudyHours >= 50 },
  { id: "streak_3", icon: "🌟", name: "3-Day Streak", desc: "Study 3 days in a row", condition: d => d.studyStreak >= 3 },
  { id: "streak_7", icon: "🔥", name: "7-Day Streak", desc: "Study 7 days in a row", condition: d => d.studyStreak >= 7 },
  { id: "streak_14", icon: "⚔️", name: "2-Week Warrior", desc: "Study 14 days in a row", condition: d => d.studyStreak >= 14 },
  { id: "os_complete", icon: "💻", name: "OS COMPLETED", desc: "Complete all OS topics", condition: d => getSubjectCompletion("BCAT016") >= 100 },
  { id: "cn_complete", icon: "🌐", name: "NETWORKS MASTERED", desc: "Complete all CN topics", condition: d => getSubjectCompletion("BCAT017") >= 100 },
  { id: "ds_complete", icon: "📊", name: "DATA SCIENCE DONE", desc: "Complete all DS topics", condition: d => getSubjectCompletion("BCAT018") >= 100 },
  { id: "backlog_complete", icon: "🎖️", name: "BACKLOG CLEARED", desc: "Complete all backlog subjects", condition: d => getSubjectCompletion("BCAT006") >= 100 && getSubjectCompletion("BCAT008") >= 100 },
  { id: "assign_submitted", icon: "📬", name: "Assignment Submitted", desc: "Submit your first assignment", condition: d => (d.assignments||[]).some(a=>a.status==="Submitted") },
  { id: "triple_revision", icon: "💯", name: "Triple Revision", desc: "Complete all 3 revisions of any topic", condition: d => Object.values(d.topics||{}).some(t=>t.r1&&t.r2&&t.r3) },
  { id: "water_goal", icon: "💧", name: "Hydration Hero", desc: "Hit water goal for a day", condition: d => (d.waterHistory||[]).some(w=>w.achieved) },
  { id: "gym_5", icon: "🏋️", name: "Gym Regular", desc: "Log 5 workouts", condition: d => (d.workouts||[]).length >= 5 },
  { id: "creatine_7", icon: "🧪", name: "Creatine Consistent", desc: "7-day creatine streak", condition: d => d.creatineStreak >= 7 },
  { id: "protein_goal", icon: "💪", name: "Protein Champion", desc: "Hit protein goal in a day", condition: d => (d.dietHistory||[]).some(dh=>dh.proteinAchieved) },
  { id: "readiness_50", icon: "📈", name: "50% Ready", desc: "Reach 50% readiness score", condition: d => d.readinessScore >= 50 },
  { id: "readiness_80", icon: "🎯", name: "80% Battlefield Ready", desc: "Reach 80% readiness score", condition: d => d.readinessScore >= 80 },
];

// ── STATE ──────────────────────────────────────────────────
let STATE = {};
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let timerSubject = "";
let chartsInitialized = false;
const chartInstances = {};

function defaultState() {
  return {
    topics: {}, // { topicId: { done, r1, r2, r3, weak, important, notes, questions } }
    assignments: [],
    studyLogs: [],
    workouts: [],
    meals: [],
    water: { today: 0, goal: 3000, lastDate: "", history: [] },
    creatine: { lastDate: "", streak: 0, history: [] },
    examDate: "",
    studentName: "BCA Student",
    proteinGoal: 80,
    calorieGoal: 2200,
    xp: 0,
    level: 1,
    studyStreak: 0,
    lastStudyDate: "",
    unlockedAchievements: [],
    completedTopics: 0,
    totalStudyHours: 0,
    readinessScore: 0,
    totalTopics: 0
  };
}

function loadState() {
  const raw = localStorage.getItem("bcaWarRoom");
  if (raw) { try { STATE = {...defaultState(), ...JSON.parse(raw)}; } catch(e) { STATE = defaultState(); } }
  else { STATE = defaultState(); }
  updateCountsFromTopics();
}
function saveState() { localStorage.setItem("bcaWarRoom", JSON.stringify(STATE)); }

function updateCountsFromTopics() {
  let done = 0, total = 0;
  Object.values(SYLLABUS).forEach(sub => sub.units.forEach(u => u.topics.forEach(t => {
    total++;
    if (STATE.topics[t.id]?.done) done++;
  })));
  STATE.completedTopics = done;
  STATE.totalTopics = total;
  let totalSec = 0;
  (STATE.studyLogs||[]).forEach(l => totalSec += (l.hours*3600 + l.minutes*60));
  STATE.totalStudyHours = totalSec / 3600;
  const comp = total > 0 ? (done / total) * 100 : 0;
  const revTopics = Object.values(STATE.topics).filter(t=>t.r1).length;
  const revPct = total > 0 ? (revTopics/total)*100 : 0;
  STATE.readinessScore = Math.round((comp * 0.6) + (revPct * 0.4));
}

// ── NAVIGATION ─────────────────────────────────────────────
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-'+name)?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.section === name);
  });
  if (document.getElementById('sidebar').classList.contains('open')) toggleSidebar();
  refreshSection(name);
}

function refreshSection(name) {
  switch(name) {
    case 'dashboard': renderDashboard(); break;
    case 'subjects': renderSubjectTabs(); break;
    case 'backlog': renderBacklog(); break;
    case 'revision': renderRevision(); break;
    case 'planner': break;
    case 'assignments': renderAssignments(); break;
    case 'study': renderStudyTracker(); break;
    case 'gym': renderGym(); break;
    case 'diet': renderDiet(); break;
    case 'water': renderWater(); break;
    case 'analytics': renderAnalytics(); break;
    case 'achievements': renderAchievements(); break;
    case 'settings': renderSettings(); break;
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ── DASHBOARD ─────────────────────────────────────────────
function renderDashboard() {
  updateCountsFromTopics();
  renderCountdown();
  renderDashStats();
  renderDashSubjects();
  renderDailyTrackers();
  renderMotivation();
  checkWarMode();
}

function renderCountdown() {
  const ed = STATE.examDate;
  if (!ed) { document.getElementById('countdownDays').textContent = '--'; document.getElementById('examDateDisplay').textContent = 'Not Set'; return; }
  const days = Math.ceil((new Date(ed) - new Date()) / 86400000);
  document.getElementById('countdownDays').textContent = Math.max(0, days);
  document.getElementById('examDateDisplay').textContent = new Date(ed).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});
  document.getElementById('warDaysLeft').textContent = Math.max(0, days);
}

function renderDashStats() {
  const t = STATE.totalTopics, c = STATE.completedTopics;
  document.getElementById('readinessScore').textContent = STATE.readinessScore + '%';
  document.getElementById('readinessBar').style.width = STATE.readinessScore + '%';
  document.getElementById('totalSubjects').textContent = Object.keys(SYLLABUS).length;
  let totalUnits = 0;
  Object.values(SYLLABUS).forEach(s => totalUnits += s.units.length);
  document.getElementById('totalUnits').textContent = totalUnits;
  document.getElementById('totalTopics').textContent = t;
  document.getElementById('completedTopics').textContent = c;
  document.getElementById('remainingTopics').textContent = t - c;
  const pending = (STATE.assignments||[]).filter(a=>a.status!=='Submitted').length;
  document.getElementById('pendingAssignments').textContent = pending;
  let pendRev = 0;
  Object.values(SYLLABUS).forEach(s => s.units.forEach(u => u.topics.forEach(t => {
    const td = STATE.topics[t.id];
    if (td?.done && !td?.r1) pendRev++;
  })));
  document.getElementById('pendingRevisions').textContent = pendRev;
}

function renderDashSubjects() {
  const sortedKeys = Object.keys(SYLLABUS).sort((a,b) => SYLLABUS[a].priorityRank - SYLLABUS[b].priorityRank);
  const html = sortedKeys.map(k => {
    const s = SYLLABUS[k];
    const pct = getSubjectCompletion(k);
    let totalT = 0, doneT = 0;
    s.units.forEach(u => u.topics.forEach(t => { totalT++; if(STATE.topics[t.id]?.done) doneT++; }));
    const colorMap = { 'very-high': '#ff8800', 'high': '#ff3366', 'low': 'rgba(232,232,240,0.4)' };
    const color = colorMap[s.isBacklog ? 'high' : s.priority] || '#00f0ff';
    const badgeClass = s.isBacklog ? 'backlog' : s.priority;
    return `<div class="subject-progress-item ${s.isBacklog ? 'backlog' : (s.priority === 'very-high' ? 'very-high' : '')}" onclick="showSection('${s.isBacklog ? 'backlog' : 'subjects'}')">
      <div>
        <div class="sp-name">${s.name} ${s.isBacklog ? '⚠️ BACKLOG' : ''}</div>
        <div class="sp-code">${s.code}</div>
        <span class="priority-badge ${badgeClass}">${s.isBacklog ? 'BACKLOG' : (s.priority === 'very-high' ? 'VERY HIGH' : 'LOW')}</span>
        <div class="sp-bar-bg"><div class="sp-bar-fill" style="width:${pct}%;background:${color}"></div></div>
      </div>
      <div>
        <div class="sp-pct" style="color:${color}">${pct}%</div>
        <div class="sp-topics">${doneT}/${totalT}</div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('dashSubjectProgress').innerHTML = html;
}

function renderDailyTrackers() {
  checkDailyReset();
  // Study hours
  const today = getTodayStr();
  let todayMin = 0;
  (STATE.studyLogs||[]).filter(l => l.date === today).forEach(l => todayMin += l.hours*60 + l.minutes);
  document.getElementById('todayStudyHours').textContent = Math.floor(todayMin/60);
  document.getElementById('todayStudyMin').textContent = todayMin % 60;
  let weekMin = 0;
  const week = [];
  for(let i=0;i<7;i++){const d=new Date();d.setDate(d.getDate()-i);week.push(d.toISOString().slice(0,10));}
  (STATE.studyLogs||[]).filter(l=>week.includes(l.date)).forEach(l=>weekMin+=l.hours*60+l.minutes);
  document.getElementById('weeklyStudyHours').textContent = (weekMin/60).toFixed(1);
  // Water
  const w = STATE.water.today;
  const wg = STATE.water.goal;
  document.getElementById('dashWater').textContent = w;
  document.getElementById('dashWaterGoal').textContent = wg;
  document.getElementById('waterMiniBar').style.width = Math.min(100,(w/wg)*100)+'%';
  // Protein
  const meals = (STATE.meals||[]).filter(m=>m.date===today);
  const prot = meals.reduce((acc,m)=>acc+(m.protein||0),0);
  const pg = STATE.proteinGoal || 80;
  document.getElementById('dashProtein').textContent = prot;
  document.getElementById('dashProteinGoal').textContent = pg;
  document.getElementById('proteinMiniBar').style.width = Math.min(100,(prot/pg)*100)+'%';
  // Creatine
  const cDone = STATE.creatine.lastDate === today;
  document.getElementById('creatineStatus').textContent = cDone ? '✅' : '❌';
  document.getElementById('creatineStreak').textContent = STATE.creatine.streak || 0;
  // Gym
  const todayWorkout = (STATE.workouts||[]).find(w=>w.date===today);
  document.getElementById('gymTodayStatus').textContent = todayWorkout ? todayWorkout.type : '—';
  const weekCount = (STATE.workouts||[]).filter(w=>week.includes(w.date)).length;
  document.getElementById('gymWeekCount').textContent = weekCount;
}

function renderMotivation() {
  const day = new Date().getDate();
  const idx = day % MOTIVATIONS.length;
  document.getElementById('motivationText').textContent = MOTIVATIONS[idx];
}

function checkWarMode() {
  if (!STATE.examDate) return;
  const days = Math.ceil((new Date(STATE.examDate) - new Date()) / 86400000);
  const banner = document.getElementById('warModeBanner');
  if (days <= 30 && days > 0) { banner.classList.remove('hidden'); }
  else { banner.classList.add('hidden'); }
}

// ── SUBJECTS ──────────────────────────────────────────────
let activeSubjectKey = null;

function renderSubjectTabs() {
  const tabs = document.getElementById('subjectTabs');
  const semSubjects = Object.keys(SYLLABUS).filter(k => !SYLLABUS[k].isBacklog)
    .sort((a,b) => SYLLABUS[a].priorityRank - SYLLABUS[b].priorityRank);
  tabs.innerHTML = semSubjects.map(k => {
    const s = SYLLABUS[k];
    return `<button class="tab-btn ${activeSubjectKey===k?'active':''}" onclick="renderSubjectDetail('${k}')">${s.name}</button>`;
  }).join('');
  if (!activeSubjectKey || !semSubjects.includes(activeSubjectKey)) activeSubjectKey = semSubjects[0];
  renderSubjectDetail(activeSubjectKey);
}

function renderSubjectDetail(key) {
  activeSubjectKey = key;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.textContent === SYLLABUS[key].name));
  const s = SYLLABUS[key];
  const pct = getSubjectCompletion(key);
  let totalT=0, doneT=0, r1T=0, r2T=0, r3T=0;
  s.units.forEach(u => u.topics.forEach(t => {
    totalT++;
    const td = STATE.topics[t.id]||{};
    if(td.done) doneT++;
    if(td.r1) r1T++;
    if(td.r2) r2T++;
    if(td.r3) r3T++;
  }));
  const badge = s.isBacklog ? '<span class="priority-badge backlog">BACKLOG</span>' :
    (s.priority==='very-high' ? '<span class="priority-badge very-high">VERY HIGH</span>' : '<span class="priority-badge low">LOW PRIORITY</span>');
  let html = `<div class="subject-header-card">
    <div class="sh-left">
      <div class="sh-code">${s.code} · SEMESTER ${s.semester}</div>
      <div class="sh-name">${s.name}</div>
      ${badge}
      <div style="font-size:0.75rem;color:var(--text-dim);margin-top:8px">
        ✅ Done: ${doneT}/${totalT} &nbsp;|&nbsp; 🔄 Rev1: ${r1T} &nbsp;|&nbsp; 🔄 Rev2: ${r2T} &nbsp;|&nbsp; 🔄 Rev3: ${r3T}
      </div>
    </div>
    <div class="sh-right">
      <div class="sh-pct-big">${pct}%</div>
      <div class="sh-readiness">Completion</div>
    </div>
  </div>`;

  s.units.forEach(u => {
    let uDone=0; u.topics.forEach(t => { if(STATE.topics[t.id]?.done) uDone++; });
    const uPct = u.topics.length > 0 ? Math.round((uDone/u.topics.length)*100) : 0;
    html += `<div class="unit-card">
      <div class="unit-header" onclick="toggleUnit('${u.id}')">
        <div class="unit-name">${u.name}</div>
        <div class="unit-progress-mini">
          <span>${uDone}/${u.topics.length}</span>
          <div class="bar-tiny"><div class="bar-tiny-fill" style="width:${uPct}%"></div></div>
          <span>${uPct}%</span>
        </div>
      </div>
      <div class="unit-body" id="unit-body-${u.id}">
        ${u.topics.map(t => renderTopicRow(t)).join('')}
      </div>
    </div>`;
  });
  document.getElementById('subjectContent').innerHTML = html;
}

function renderTopicRow(t) {
  const td = STATE.topics[t.id] || {};
  const done = !!td.done, r1 = !!td.r1, r2 = !!td.r2, r3 = !!td.r3;
  const weak = !!td.weak, important = !!td.important;
  const hasNotes = !!(td.notes || td.questions);
  return `<div class="topic-row" id="trow-${t.id}">
    <div class="topic-left">
      <div class="topic-title ${done?'completed':''}">${t.title} ${important?'⭐':''} ${weak?'🔴':''}</div>
      <div class="topic-subtopics">${t.subtopics}</div>
    </div>
    <div class="topic-controls">
      <label class="chk-label ${done?'checked':''}" title="Mark Complete">
        <input type="checkbox" ${done?'checked':''} onchange="toggleTopicDone('${t.id}',this.checked)">
        <div class="chk-box">${done?'✓':''}</div>Done
      </label>
      <label class="chk-label r1 ${r1?'checked':''}" title="Revision 1">
        <input type="checkbox" ${r1?'checked':''} onchange="toggleRevision('${t.id}','r1',this.checked)">
        <div class="chk-box">${r1?'✓':''}</div>R1
      </label>
      <label class="chk-label r2 ${r2?'checked':''}" title="Revision 2">
        <input type="checkbox" ${r2?'checked':''} onchange="toggleRevision('${t.id}','r2',this.checked)">
        <div class="chk-box">${r2?'✓':''}</div>R2
      </label>
      <label class="chk-label r3 ${r3?'checked':''}" title="Revision 3">
        <input type="checkbox" ${r3?'checked':''} onchange="toggleRevision('${t.id}','r3',this.checked)">
        <div class="chk-box">${r3?'✓':''}</div>R3
      </label>
      <button class="btn-icon weak ${weak?'active':''}" title="Mark Weak" onclick="toggleWeak('${t.id}')">🔴</button>
      <button class="btn-icon important ${important?'active':''}" title="Mark Important" onclick="toggleImportant('${t.id}')">⭐</button>
      <button class="btn-icon" title="${hasNotes?'Edit Notes':'Add Notes'}" onclick="openNotes('${t.id}')">📝</button>
    </div>
  </div>`;
}

function toggleUnit(id) {
  const body = document.getElementById('unit-body-'+id);
  if (body) body.style.display = body.style.display === 'none' ? '' : 'none';
}

function toggleTopicDone(id, val) {
  if (!STATE.topics[id]) STATE.topics[id] = {};
  STATE.topics[id].done = val;
  if (val) addXP(10, "Topic completed");
  updateCountsFromTopics();
  saveState();
  checkAchievements();
  // Re-render the row
  const t = findTopic(id);
  if (t) {
    const row = document.getElementById('trow-'+id);
    if (row) row.outerHTML = renderTopicRow(t);
  }
  renderDashStats(); // update counters
}

function toggleRevision(id, rev, val) {
  if (!STATE.topics[id]) STATE.topics[id] = {};
  STATE.topics[id][rev] = val;
  if (val) addXP(5, "Revision completed");
  saveState();
  checkAchievements();
  const t = findTopic(id);
  if (t) {
    const row = document.getElementById('trow-'+id);
    if (row) row.outerHTML = renderTopicRow(t);
  }
}

function toggleWeak(id) {
  if (!STATE.topics[id]) STATE.topics[id] = {};
  STATE.topics[id].weak = !STATE.topics[id].weak;
  saveState();
  const t = findTopic(id);
  if (t) {
    const row = document.getElementById('trow-'+id);
    if (row) row.outerHTML = renderTopicRow(t);
  }
}

function toggleImportant(id) {
  if (!STATE.topics[id]) STATE.topics[id] = {};
  STATE.topics[id].important = !STATE.topics[id].important;
  saveState();
  const t = findTopic(id);
  if (t) {
    const row = document.getElementById('trow-'+id);
    if (row) row.outerHTML = renderTopicRow(t);
  }
}

function findTopic(id) {
  for (const s of Object.values(SYLLABUS))
    for (const u of s.units)
      for (const t of u.topics)
        if (t.id === id) return t;
  return null;
}

function getSubjectCompletion(key) {
  const s = SYLLABUS[key];
  if (!s) return 0;
  let total = 0, done = 0;
  s.units.forEach(u => u.topics.forEach(t => { total++; if(STATE.topics[t.id]?.done) done++; }));
  return total > 0 ? Math.round((done/total)*100) : 0;
}

// ── BACKLOG ────────────────────────────────────────────────
function renderBacklog() {
  const backlogs = Object.keys(SYLLABUS).filter(k => SYLLABUS[k].isBacklog)
    .sort((a,b) => SYLLABUS[a].priorityRank - SYLLABUS[b].priorityRank);
  let html = '';
  backlogs.forEach(key => {
    const s = SYLLABUS[key];
    const compPct = getSubjectCompletion(key);
    let total=0, r1Done=0, r2Done=0, r3Done=0, weakCount=0;
    s.units.forEach(u => u.topics.forEach(t => {
      total++;
      const td = STATE.topics[t.id]||{};
      if(td.r1) r1Done++;
      if(td.r2) r2Done++;
      if(td.r3) r3Done++;
      if(td.weak) weakCount++;
    }));
    const revPct = total > 0 ? Math.round((r1Done/total)*100) : 0;
    html += `<div class="backlog-subject-card">
      <div class="backlog-code">${s.code} · SEM ${s.semester} · PRIORITY #${s.priorityRank}</div>
      <div class="backlog-name">${s.name}</div>
      <div class="backlog-pct-row">
        <div class="backlog-pct-item">
          <div class="backlog-pct-label">Completion</div>
          <div class="backlog-pct-val completion">${compPct}%</div>
        </div>
        <div class="backlog-pct-item">
          <div class="backlog-pct-label">Revised</div>
          <div class="backlog-pct-val revision">${revPct}%</div>
        </div>
      </div>
      <div class="backlog-bar-row">
        <div class="backlog-bar-label">Completion Progress</div>
        <div class="backlog-bar-bg"><div class="backlog-bar-fill-green" style="width:${compPct}%"></div></div>
      </div>
      <div class="backlog-bar-row">
        <div class="backlog-bar-label">Revision Progress</div>
        <div class="backlog-bar-bg"><div class="backlog-bar-fill-cyan" style="width:${revPct}%"></div></div>
      </div>
      <div style="font-size:0.78rem;color:var(--text-dim);margin-top:10px">
        🔴 Weak Topics: ${weakCount} &nbsp;|&nbsp; Total Topics: ${total}
      </div>
      <button class="btn-primary backlog-btn" onclick="viewBacklogSubject('${key}')">📚 STUDY ${s.name.toUpperCase()}</button>
    </div>`;
  });
  document.getElementById('backlogContent').innerHTML = html;
}

function viewBacklogSubject(key) {
  activeSubjectKey = key;
  showSection('subjects');
  // Override tabs to show backlog
  const tabs = document.getElementById('subjectTabs');
  const semSubjects = Object.keys(SYLLABUS).sort((a,b) => SYLLABUS[a].priorityRank - SYLLABUS[b].priorityRank);
  tabs.innerHTML = semSubjects.map(k => {
    const s = SYLLABUS[k];
    return `<button class="tab-btn ${k===key?'active':''}" onclick="renderSubjectDetail('${k}')">${s.name}${s.isBacklog?' ⚠️':''}</button>`;
  }).join('');
  renderSubjectDetail(key);
}

// ── REVISION ──────────────────────────────────────────────
function renderRevision() {
  let totalDone=0, r1=0, r2=0, r3=0, weak=0, total=0;
  Object.values(SYLLABUS).forEach(s => s.units.forEach(u => u.topics.forEach(t => {
    total++;
    const td = STATE.topics[t.id]||{};
    if(td.done) totalDone++;
    if(td.r1) r1++;
    if(td.r2) r2++;
    if(td.r3) r3++;
    if(td.weak) weak++;
  })));
  document.getElementById('revisionStatsRow').innerHTML = `
    <div class="rev-stat-card"><div class="rev-stat-label">Topics Done</div><div class="rev-stat-val" style="color:var(--green)">${totalDone}</div></div>
    <div class="rev-stat-card"><div class="rev-stat-label">Revision 1 Done</div><div class="rev-stat-val" style="color:var(--cyan)">${r1}</div></div>
    <div class="rev-stat-card"><div class="rev-stat-label">Revision 2 Done</div><div class="rev-stat-val" style="color:var(--purple)">${r2}</div></div>
    <div class="rev-stat-card"><div class="rev-stat-label">Revision 3 Done</div><div class="rev-stat-val" style="color:var(--orange)">${r3}</div></div>
    <div class="rev-stat-card"><div class="rev-stat-label">Weak Topics</div><div class="rev-stat-val" style="color:var(--red)">${weak}</div></div>
  `;
  const sortedKeys = Object.keys(SYLLABUS).sort((a,b)=>SYLLABUS[a].priorityRank-SYLLABUS[b].priorityRank);
  let html = '';
  sortedKeys.forEach(key => {
    const s = SYLLABUS[key];
    let sTotal=0, sR1=0, sR2=0, sR3=0;
    s.units.forEach(u => u.topics.forEach(t => {
      sTotal++;
      const td = STATE.topics[t.id]||{};
      if(td.r1) sR1++;
      if(td.r2) sR2++;
      if(td.r3) sR3++;
    }));
    const p1 = sTotal>0?Math.round((sR1/sTotal)*100):0;
    const p2 = sTotal>0?Math.round((sR2/sTotal)*100):0;
    const p3 = sTotal>0?Math.round((sR3/sTotal)*100):0;
    html += `<div class="revision-subject-card">
      <div class="rev-subj-header">
        <div>
          <div class="rev-subj-name">${s.name} ${s.isBacklog?'⚠️':''}</div>
          <div class="rev-subj-code">${s.code}</div>
        </div>
        <button class="btn-sm cyan" onclick="viewBacklogSubject('${key}')">STUDY</button>
      </div>
      <div class="rev-bars">
        <div class="rev-bar-row"><span>R1</span><div class="rev-bar-bg-sm"><div class="rev-bar-fill-sm" style="width:${p1}%;background:var(--cyan)"></div></div><span class="rev-pct-sm">${p1}%</span></div>
        <div class="rev-bar-row"><span>R2</span><div class="rev-bar-bg-sm"><div class="rev-bar-fill-sm" style="width:${p2}%;background:var(--purple)"></div></div><span class="rev-pct-sm">${p2}%</span></div>
        <div class="rev-bar-row"><span>R3</span><div class="rev-bar-bg-sm"><div class="rev-bar-fill-sm" style="width:${p3}%;background:var(--orange)"></div></div><span class="rev-pct-sm">${p3}%</span></div>
      </div>
    </div>`;
  });
  document.getElementById('revisionContent').innerHTML = html;
}

// ── PLANNER ────────────────────────────────────────────────
function generatePlan() {
  const today = getTodayStr();
  const sortedKeys = Object.keys(SYLLABUS).sort((a,b)=>SYLLABUS[a].priorityRank-SYLLABUS[b].priorityRank);

  // Study targets
  let studyItems = [];
  sortedKeys.slice(0,5).forEach(key => {
    const s = SYLLABUS[key];
    let pending = [];
    s.units.forEach(u => u.topics.forEach(t => {
      const td = STATE.topics[t.id]||{};
      if (!td.done) pending.push({t, s});
    }));
    if (pending.length > 0) {
      studyItems.push({name: `${s.name} (${s.code})`, topic: pending[0].t.title, isBacklog: s.isBacklog});
    }
  });

  // Revision targets
  let revItems = [];
  sortedKeys.forEach(key => {
    const s = SYLLABUS[key];
    s.units.forEach(u => u.topics.forEach(t => {
      const td = STATE.topics[t.id]||{};
      if (td.done && !td.r1) revItems.push({name: `${s.name}: ${t.title}`, isBacklog: s.isBacklog});
    }));
  });

  // Assignments
  const pendAssign = (STATE.assignments||[]).filter(a=>a.status!=='Submitted').slice(0,3);

  // Days remaining
  let daysLeft = '?';
  if (STATE.examDate) daysLeft = Math.max(0, Math.ceil((new Date(STATE.examDate)-new Date())/86400000));

  let html = `<div class="plan-card">
    <div class="plan-section-title">⚡ TODAY'S BATTLE PLAN — ${new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'short'})}</div>
    <div class="plan-item"><div class="plan-item-dot orange"></div><strong>${daysLeft} days</strong> until exam. Stay focused.</div>
  </div>`;

  if (studyItems.length) {
    html += `<div class="plan-card"><div class="plan-section-title">📚 STUDY TARGETS</div>`;
    studyItems.slice(0,4).forEach(item => {
      html += `<div class="plan-item"><div class="plan-item-dot ${item.isBacklog?'red':''}"></div>${item.isBacklog?'⚠️ BACKLOG: ':''}${item.name} → <em>${item.topic}</em></div>`;
    });
    html += `</div>`;
  }

  if (revItems.length) {
    html += `<div class="plan-card"><div class="plan-section-title">🔄 REVISION TARGETS</div>`;
    revItems.slice(0,4).forEach(item => {
      html += `<div class="plan-item"><div class="plan-item-dot" style="background:var(--cyan)"></div>${item.name}</div>`;
    });
    html += `</div>`;
  }

  if (pendAssign.length) {
    html += `<div class="plan-card"><div class="plan-section-title">📝 ASSIGNMENT TARGETS</div>`;
    pendAssign.forEach(a => {
      html += `<div class="plan-item"><div class="plan-item-dot red"></div>${a.title} (${a.subject}) — Due: ${a.deadline||'No deadline'}</div>`;
    });
    html += `</div>`;
  }

  const wg = STATE.water?.goal || 3000;
  const pg = STATE.proteinGoal || 80;
  html += `<div class="plan-card">
    <div class="plan-section-title">💪 HEALTH TARGETS</div>
    <div class="plan-item"><div class="plan-item-dot" style="background:var(--cyan)"></div>💧 Drink ${wg}ml water today</div>
    <div class="plan-item"><div class="plan-item-dot green"></div>🥗 Hit ${pg}g protein today (Soya chunks + Dal + Paneer)</div>
    <div class="plan-item"><div class="plan-item-dot orange"></div>🧪 Take 5g creatine with water</div>
    <div class="plan-item"><div class="plan-item-dot" style="background:var(--orange)"></div>🏋️ 1hr gym (or rest day if needed)</div>
    <div class="plan-item"><div class="plan-item-dot" style="background:var(--purple)"></div>😴 Sleep by 12 AM. Wake by 7 AM.</div>
  </div>`;

  document.getElementById('plannerContent').innerHTML = html;
  addXP(2, "Plan generated");
}

// ── ASSIGNMENTS ────────────────────────────────────────────
function renderAssignments() {
  const populateSelect = () => {
    const sel = document.getElementById('assignSubject');
    sel.innerHTML = Object.values(SYLLABUS).map(s=>`<option value="${s.name}">${s.code} – ${s.name}</option>`).join('');
  };
  const assigns = STATE.assignments || [];
  const today = getTodayStr();
  let html = '';
  if (!assigns.length) {
    html = `<div class="empty-state"><div class="empty-icon">📝</div>No assignments yet. Add your first one!</div>`;
  } else {
    const sorted = [...assigns].sort((a,b)=>{ if(!a.deadline) return 1; if(!b.deadline) return -1; return a.deadline > b.deadline ? 1 : -1; });
    sorted.forEach((a,i) => {
      const isOverdue = a.deadline && a.deadline < today && a.status !== 'Submitted';
      html += `<div class="assignment-card ${isOverdue?'overdue':''}">
        <div>
          <div class="assign-title">${a.title}</div>
          <div class="assign-meta">
            <span class="assign-tag subject">${a.subject}</span>
            ${a.deadline ? `<span class="assign-tag deadline">Due: ${a.deadline}</span>` : ''}
            ${isOverdue ? `<span class="assign-tag overdue-tag">🚨 OVERDUE</span>` : ''}
            <span class="assign-tag" style="color:var(--purple);border-color:rgba(191,95,255,0.2);background:rgba(191,95,255,0.06)">${a.priority||'medium'} priority</span>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
          <select class="assign-status-select" onchange="updateAssignStatus(${i},this.value)">
            ${['Not Started','In Progress','Completed','Submitted'].map(s=>`<option ${a.status===s?'selected':''}>${s}</option>`).join('')}
          </select>
          <button class="btn-icon" onclick="deleteAssignment(${i})" title="Delete">🗑️</button>
        </div>
      </div>`;
    });
  }
  document.getElementById('assignmentList').innerHTML = html;
}

function openAddAssignment() {
  const sel = document.getElementById('assignSubject');
  sel.innerHTML = Object.values(SYLLABUS).map(s=>`<option value="${s.name}">${s.code} – ${s.name}</option>`).join('');
  document.getElementById('assignTitle').value = '';
  document.getElementById('assignDeadline').value = '';
  openModal('modalAssignment');
}

function saveAssignment() {
  const title = document.getElementById('assignTitle').value.trim();
  if (!title) { showToast("Enter assignment title", true); return; }
  STATE.assignments = STATE.assignments || [];
  STATE.assignments.push({
    title,
    subject: document.getElementById('assignSubject').value,
    deadline: document.getElementById('assignDeadline').value,
    priority: document.getElementById('assignPriority').value,
    status: 'Not Started'
  });
  saveState();
  closeModal('modalAssignment');
  renderAssignments();
  showToast("Assignment added!");
  addXP(3, "Assignment added");
}

function updateAssignStatus(idx, status) {
  STATE.assignments[idx].status = status;
  if (status === 'Submitted') { addXP(15, "Assignment submitted"); checkAchievements(); }
  saveState();
  renderAssignments();
}

function deleteAssignment(idx) {
  STATE.assignments.splice(idx, 1);
  saveState();
  renderAssignments();
}

// ── STUDY TRACKER ─────────────────────────────────────────
function renderStudyTracker() {
  populateSubjectSelects();
  document.getElementById('logDate').value = getTodayStr();
  renderStudyStats();
  renderStudyLogs();
}

function populateSubjectSelects() {
  const opts = Object.values(SYLLABUS).map(s=>`<option value="${s.name}">${s.code} – ${s.name}</option>`).join('');
  ['timerSubjectSelect','logSubjectSelect'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '<option value="">Select Subject</option>' + opts;
  });
}

function startTimer() {
  const sel = document.getElementById('timerSubjectSelect').value;
  if (!sel) { showToast("Select a subject first!", true); return; }
  timerSubject = sel;
  timerRunning = true;
  document.getElementById('btnStart').disabled = true;
  document.getElementById('btnPause').disabled = false;
  document.getElementById('btnStop').disabled = false;
  timerInterval = setInterval(() => {
    timerSeconds++;
    const h = String(Math.floor(timerSeconds/3600)).padStart(2,'0');
    const m = String(Math.floor((timerSeconds%3600)/60)).padStart(2,'0');
    const s = String(timerSeconds%60).padStart(2,'0');
    document.getElementById('timerDisplay').textContent = `${h}:${m}:${s}`;
  }, 1000);
}

function pauseTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById('btnStart').disabled = false;
    document.getElementById('btnStart').textContent = '▶ RESUME';
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  const hrs = Math.floor(timerSeconds/3600);
  const mins = Math.floor((timerSeconds%3600)/60);
  STATE.studyLogs = STATE.studyLogs || [];
  STATE.studyLogs.push({ subject: timerSubject, hours: hrs, minutes: mins, date: getTodayStr(), ts: Date.now() });
  updateStudyStreak();
  updateCountsFromTopics();
  saveState();
  checkAchievements();
  addXP(Math.floor(timerSeconds/60), "Study session");
  timerSeconds = 0;
  timerRunning = false;
  document.getElementById('timerDisplay').textContent = '00:00:00';
  document.getElementById('btnStart').disabled = false;
  document.getElementById('btnStart').textContent = '▶ START';
  document.getElementById('btnPause').disabled = true;
  document.getElementById('btnStop').disabled = true;
  showToast(`Session logged: ${hrs}h ${mins}m`);
  renderStudyStats();
  renderStudyLogs();
}

function openStudyTimer() {
  populateSubjectSelects();
  document.getElementById('logHours').value = '';
  document.getElementById('logMinutes').value = '';
  document.getElementById('logDate').value = getTodayStr();
  openModal('modalStudyLog');
}

function saveStudyLog() {
  const subject = document.getElementById('logSubjectSelect').value;
  const hours = parseInt(document.getElementById('logHours').value)||0;
  const minutes = parseInt(document.getElementById('logMinutes').value)||0;
  const date = document.getElementById('logDate').value||getTodayStr();
  if (!subject) { showToast("Select a subject", true); return; }
  if (hours === 0 && minutes === 0) { showToast("Enter study duration", true); return; }
  STATE.studyLogs = STATE.studyLogs || [];
  STATE.studyLogs.push({ subject, hours, minutes, date, ts: Date.now() });
  updateStudyStreak();
  updateCountsFromTopics();
  saveState();
  checkAchievements();
  addXP((hours*60+minutes), "Study logged");
  closeModal('modalStudyLog');
  showToast(`Logged ${hours}h ${minutes}m`);
  renderStudyStats();
  renderStudyLogs();
}

function renderStudyStats() {
  const logs = STATE.studyLogs || [];
  const today = getTodayStr();
  let todayMin=0, weekMin=0, monthMin=0, totalMin=0;
  const week=[], month=[];
  for(let i=0;i<7;i++){const d=new Date();d.setDate(d.getDate()-i);week.push(d.toISOString().slice(0,10));}
  for(let i=0;i<30;i++){const d=new Date();d.setDate(d.getDate()-i);month.push(d.toISOString().slice(0,10));}
  const subjectHours = {};
  logs.forEach(l => {
    const m = l.hours*60+l.minutes;
    totalMin += m;
    if(l.date===today) todayMin += m;
    if(week.includes(l.date)) weekMin += m;
    if(month.includes(l.date)) monthMin += m;
    subjectHours[l.subject] = (subjectHours[l.subject]||0)+m;
  });
  const most = Object.entries(subjectHours).sort((a,b)=>b[1]-a[1])[0];
  const least = Object.entries(subjectHours).sort((a,b)=>a[1]-b[1])[0];
  document.getElementById('studyStatsGrid').innerHTML = `
    <div class="study-stat-item"><div class="study-stat-label">Today</div><div class="study-stat-val">${(todayMin/60).toFixed(1)}h</div></div>
    <div class="study-stat-item"><div class="study-stat-label">This Week</div><div class="study-stat-val">${(weekMin/60).toFixed(1)}h</div></div>
    <div class="study-stat-item"><div class="study-stat-label">This Month</div><div class="study-stat-val">${(monthMin/60).toFixed(1)}h</div></div>
    <div class="study-stat-item"><div class="study-stat-label">Total</div><div class="study-stat-val">${(totalMin/60).toFixed(1)}h</div></div>
    <div class="study-stat-item"><div class="study-stat-label">Most Studied</div><div class="study-stat-val" style="font-size:0.7rem;word-break:break-word">${most?most[0]:'-'}</div></div>
    <div class="study-stat-item"><div class="study-stat-label">Least Studied</div><div class="study-stat-val" style="font-size:0.7rem;word-break:break-word">${least&&Object.keys(subjectHours).length>1?least[0]:'-'}</div></div>
  `;
}

function renderStudyLogs() {
  const logs = [...(STATE.studyLogs||[])].reverse().slice(0,20);
  let html = '<h2 class="sub-heading" style="margin-top:24px">📋 RECENT SESSIONS</h2>';
  if (!logs.length) html += `<div class="empty-state"><div class="empty-icon">⏱️</div>No sessions logged yet.</div>`;
  else logs.forEach(l => {
    html += `<div class="study-log-item">
      <span class="log-subject">${l.subject}</span>
      <span class="log-duration">${l.hours}h ${l.minutes}m</span>
      <span class="log-date">${l.date}</span>
    </div>`;
  });
  document.getElementById('studyLogList').innerHTML = html;
}

function updateStudyStreak() {
  const today = getTodayStr();
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  const yStr = yesterday.toISOString().slice(0,10);
  if (STATE.lastStudyDate === today) return;
  if (STATE.lastStudyDate === yStr) STATE.studyStreak = (STATE.studyStreak||0) + 1;
  else if (STATE.lastStudyDate !== today) STATE.studyStreak = 1;
  STATE.lastStudyDate = today;
}

// ── GYM ───────────────────────────────────────────────────
function renderGym() {
  const workouts = STATE.workouts || [];
  const today = getTodayStr();
  const week=[];
  for(let i=0;i<7;i++){const d=new Date();d.setDate(d.getDate()-i);week.push(d.toISOString().slice(0,10));}
  const weekSessions = workouts.filter(w=>week.includes(w.date)&&w.type!=='Rest').length;
  const totalSessions = workouts.filter(w=>w.type!=='Rest').length;
  const attendance = workouts.length > 0 ? Math.round((workouts.filter(w=>w.type!=='Rest').length/workouts.length)*100) : 0;
  const lastWeight = workouts.filter(w=>w.weight).pop();
  document.getElementById('gymStatsRow').innerHTML = `
    <div class="gym-stat-card"><div class="gym-stat-label">This Week</div><div class="gym-stat-val">${weekSessions}</div></div>
    <div class="gym-stat-card"><div class="gym-stat-label">Total Sessions</div><div class="gym-stat-val">${totalSessions}</div></div>
    <div class="gym-stat-card"><div class="gym-stat-label">Attendance %</div><div class="gym-stat-val">${attendance}%</div></div>
    <div class="gym-stat-card"><div class="gym-stat-label">Last Weight</div><div class="gym-stat-val" style="font-size:1.1rem">${lastWeight?lastWeight.weight+'kg':'—'}</div></div>
  `;
  let html = '<h2 class="sub-heading">🏋️ WORKOUT LOG</h2>';
  if (!workouts.length) html += `<div class="empty-state"><div class="empty-icon">🏋️</div>No workouts logged yet.</div>`;
  else [...workouts].reverse().slice(0,15).forEach(w => {
    html += `<div class="workout-log-item">
      <div>
        <span class="workout-type-badge">${w.type}</span>
        ${w.notes ? `<div style="font-size:0.78rem;color:var(--text-dim);margin-top:6px">${w.notes}</div>` : ''}
      </div>
      <div style="text-align:right">
        <div class="workout-weight">${w.weight?w.weight+'kg':''}</div>
        <div class="workout-date">${w.date}</div>
      </div>
    </div>`;
  });
  document.getElementById('gymLog').innerHTML = html;
}

function openAddWorkout() {
  document.getElementById('workoutDate').value = getTodayStr();
  document.getElementById('bodyWeight').value = '';
  document.getElementById('workoutNotes').value = '';
  openModal('modalWorkout');
}

function saveWorkout() {
  const date = document.getElementById('workoutDate').value || getTodayStr();
  const type = document.getElementById('workoutType').value;
  const weight = document.getElementById('bodyWeight').value;
  const notes = document.getElementById('workoutNotes').value;
  STATE.workouts = STATE.workouts || [];
  STATE.workouts.push({ date, type, weight: weight?parseFloat(weight):null, notes });
  saveState();
  checkAchievements();
  if (type !== 'Rest') addXP(15, "Workout logged");
  closeModal('modalWorkout');
  renderGym();
  showToast("Workout logged! 💪");
}

// ── DIET ──────────────────────────────────────────────────
function renderDiet() {
  document.getElementById('proteinGoalInput').value = STATE.proteinGoal || 80;
  document.getElementById('calorieGoalInput').value = STATE.calorieGoal || 2200;
  document.getElementById('showProteinGoal').textContent = STATE.proteinGoal || 80;
  document.getElementById('showCalorieGoal').textContent = STATE.calorieGoal || 2200;
  const today = getTodayStr();
  const meals = (STATE.meals||[]).filter(m=>m.date===today);
  const prot = meals.reduce((acc,m)=>acc+(m.protein||0),0);
  const cal = meals.reduce((acc,m)=>acc+(m.calories||0),0);
  const pg = STATE.proteinGoal || 80;
  const cg = STATE.calorieGoal || 2200;
  document.getElementById('todayProtein').textContent = prot;
  document.getElementById('todayCalories').textContent = cal;
  document.getElementById('proteinBar').style.width = Math.min(100,(prot/pg)*100)+'%';
  document.getElementById('calorieBar').style.width = Math.min(100,(cal/cg)*100)+'%';
  let html = '<h2 class="sub-heading" style="margin-top:24px">🍽️ TODAY\'S MEALS</h2>';
  if (!meals.length) html += `<div class="empty-state"><div class="empty-icon">🥗</div>No meals logged today.</div>`;
  else meals.forEach((m,i) => {
    html += `<div class="meal-log-item">
      <div>
        <div class="meal-name">${m.name}</div>
        <div class="meal-macros">${m.protein}g protein · ${m.calories} cal</div>
      </div>
      <button class="btn-icon" onclick="deleteMeal(${STATE.meals.indexOf(m)})" title="Delete">🗑️</button>
    </div>`;
  });
  document.getElementById('mealLog').innerHTML = html;
}

function saveProteinGoal() {
  STATE.proteinGoal = parseInt(document.getElementById('proteinGoalInput').value)||80;
  saveState();
  renderDiet();
  showToast("Protein goal saved!");
}
function saveCalorieGoal() {
  STATE.calorieGoal = parseInt(document.getElementById('calorieGoalInput').value)||2200;
  saveState();
  renderDiet();
  showToast("Calorie goal saved!");
}

function openAddMeal() {
  document.getElementById('mealName').value = '';
  document.getElementById('mealProtein').value = '';
  document.getElementById('mealCalories').value = '';
  openModal('modalMeal');
}

function quickAddProtein(name, protPer100g, grams) {
  const protein = Math.round(protPer100g * grams / 100);
  const calories = Math.round(grams * 3.5);
  STATE.meals = STATE.meals || [];
  STATE.meals.push({ name: `${name} (${grams}g)`, protein, calories, date: getTodayStr() });
  saveState();
  checkAchievements();
  renderDiet();
  showToast(`${name} added: ${protein}g protein`);
}

function saveMeal() {
  const name = document.getElementById('mealName').value.trim();
  if (!name) { showToast("Enter meal name", true); return; }
  STATE.meals = STATE.meals || [];
  STATE.meals.push({
    name,
    protein: parseInt(document.getElementById('mealProtein').value)||0,
    calories: parseInt(document.getElementById('mealCalories').value)||0,
    date: getTodayStr()
  });
  saveState();
  closeModal('modalMeal');
  renderDiet();
  checkAchievements();
  showToast("Meal logged!");
}

function deleteMeal(idx) {
  STATE.meals.splice(idx, 1);
  saveState();
  renderDiet();
}

// ── WATER ─────────────────────────────────────────────────
function renderWater() {
  checkDailyReset();
  const w = STATE.water.today;
  const g = STATE.water.goal;
  document.getElementById('waterAmount').textContent = w;
  document.getElementById('waterGoalDisp').textContent = g;
  document.getElementById('waterRemaining').textContent = Math.max(0, g-w);
  document.getElementById('waterGoalInput').value = g;
  const pct = Math.min(1, w/g);
  const circumference = 534;
  document.getElementById('waterCircle').style.strokeDashoffset = circumference - (pct * circumference);
  document.getElementById('waterStreak').textContent = STATE.creatine.streak || 0;
}

function addWater(ml) {
  checkDailyReset();
  STATE.water.today = (STATE.water.today||0) + ml;
  const achieved = STATE.water.today >= STATE.water.goal;
  if (achieved) {
    STATE.water.history = STATE.water.history || [];
    const today = getTodayStr();
    if (!STATE.water.history.find(h=>h.date===today)) {
      STATE.water.history.push({date:today, achieved:true});
      addXP(5, "Water goal reached");
      checkAchievements();
    }
  }
  saveState();
  renderWater();
  // Update dashboard mini bar
  document.getElementById('dashWater').textContent = STATE.water.today;
  document.getElementById('waterMiniBar').style.width = Math.min(100,(STATE.water.today/STATE.water.goal)*100)+'%';
}

function saveWaterGoal() {
  STATE.water.goal = parseInt(document.getElementById('waterGoalInput').value)||3000;
  saveState();
  renderWater();
  showToast("Water goal saved!");
}

function resetWater() {
  STATE.water.today = 0;
  saveState();
  renderWater();
  showToast("Water reset!");
}

function logCreatine() {
  const today = getTodayStr();
  if (STATE.creatine.lastDate === today) { showToast("Already logged today!", true); return; }
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  const yStr = yesterday.toISOString().slice(0,10);
  if (STATE.creatine.lastDate === yStr) STATE.creatine.streak = (STATE.creatine.streak||0) + 1;
  else STATE.creatine.streak = 1;
  STATE.creatine.lastDate = today;
  STATE.creatine.history = STATE.creatine.history || [];
  STATE.creatine.history.push({date:today});
  addXP(5, "Creatine logged");
  saveState();
  checkAchievements();
  showToast("Creatine 5g logged! 🧪");
  document.getElementById('creatineStatus').textContent = '✅';
  document.getElementById('creatineStreak').textContent = STATE.creatine.streak;
}

function checkDailyReset() {
  const today = getTodayStr();
  if (STATE.water.lastDate !== today) {
    STATE.water.today = 0;
    STATE.water.lastDate = today;
    saveState();
  }
}

// ── ANALYTICS ─────────────────────────────────────────────
function renderAnalytics() {
  setTimeout(() => {
    renderSubjectChart();
    renderStudyHoursChart();
    renderRevisionChart();
    renderWaterChart();
    renderProteinChart();
    renderAssignmentChart();
  }, 100);
}

const CHART_DEFAULTS = {
  plugins: { legend: { labels: { color: 'rgba(232,232,240,0.7)', font: { family: 'Rajdhani', size: 12 } } } },
  scales: {
    x: { ticks: { color: 'rgba(232,232,240,0.5)', font: { family: 'Rajdhani' } }, grid: { color: 'rgba(255,255,255,0.04)' } },
    y: { ticks: { color: 'rgba(232,232,240,0.5)', font: { family: 'Rajdhani' } }, grid: { color: 'rgba(255,255,255,0.04)' } }
  }
};

function destroyChart(id) {
  if (chartInstances[id]) { chartInstances[id].destroy(); delete chartInstances[id]; }
}

function renderSubjectChart() {
  destroyChart('chartSubjectCompletion');
  const ctx = document.getElementById('chartSubjectCompletion').getContext('2d');
  const labels = Object.values(SYLLABUS).map(s=>s.name);
  const data = Object.keys(SYLLABUS).map(k=>getSubjectCompletion(k));
  chartInstances['chartSubjectCompletion'] = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Completion %', data, backgroundColor: data.map(d => d>70?'rgba(0,255,136,0.6)':d>40?'rgba(0,240,255,0.6)':'rgba(255,51,102,0.6)'), borderColor: 'transparent', borderRadius: 6 }] },
    options: { ...CHART_DEFAULTS, plugins: { ...CHART_DEFAULTS.plugins, title: { display: true, text: 'Subject Completion', color: '#00f0ff', font: { family: 'Orbitron', size: 13 } } } }
  });
}

function renderStudyHoursChart() {
  destroyChart('chartStudyHours');
  const ctx = document.getElementById('chartStudyHours').getContext('2d');
  const days=[];const labels=[];
  for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(d.toISOString().slice(0,10));labels.push(d.toLocaleDateString('en-IN',{weekday:'short'}));}
  const data = days.map(day => {
    let min=0;(STATE.studyLogs||[]).filter(l=>l.date===day).forEach(l=>min+=l.hours*60+l.minutes);
    return (min/60).toFixed(1);
  });
  chartInstances['chartStudyHours'] = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets: [{ label: 'Study Hours', data, borderColor: '#00f0ff', backgroundColor: 'rgba(0,240,255,0.1)', tension: 0.4, fill: true, pointBackgroundColor: '#00f0ff', pointRadius: 4 }] },
    options: { ...CHART_DEFAULTS, plugins: { ...CHART_DEFAULTS.plugins, title: { display: true, text: 'Last 7 Days Study Hours', color: '#00f0ff', font: { family: 'Orbitron', size: 13 } } } }
  });
}

function renderRevisionChart() {
  destroyChart('chartRevision');
  const ctx = document.getElementById('chartRevision').getContext('2d');
  const labels = Object.values(SYLLABUS).map(s=>s.code);
  let total=[],r1=[],r2=[],r3=[];
  Object.keys(SYLLABUS).forEach(k => {
    let t=0,rv1=0,rv2=0,rv3=0;
    SYLLABUS[k].units.forEach(u=>u.topics.forEach(tp=>{t++;const td=STATE.topics[tp.id]||{};if(td.r1)rv1++;if(td.r2)rv2++;if(td.r3)rv3++;}));
    total.push(t); r1.push(rv1); r2.push(rv2); r3.push(rv3);
  });
  chartInstances['chartRevision'] = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [
      { label: 'Rev 1', data: r1, backgroundColor: 'rgba(0,240,255,0.7)', borderRadius:4 },
      { label: 'Rev 2', data: r2, backgroundColor: 'rgba(191,95,255,0.7)', borderRadius:4 },
      { label: 'Rev 3', data: r3, backgroundColor: 'rgba(255,136,0,0.7)', borderRadius:4 }
    ]},
    options: { ...CHART_DEFAULTS, plugins: { ...CHART_DEFAULTS.plugins, title: { display: true, text: 'Revision Progress by Subject', color: '#00f0ff', font: { family: 'Orbitron', size: 13 } } } }
  });
}

function renderWaterChart() {
  destroyChart('chartWater');
  const ctx = document.getElementById('chartWater').getContext('2d');
  const days=[];const labels=[];
  for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(d.toISOString().slice(0,10));labels.push(d.toLocaleDateString('en-IN',{weekday:'short'}));}
  const hist = STATE.water?.history || [];
  const data = days.map(day => {
    const entry = hist.find(h=>h.date===day);
    return entry ? (entry.ml || STATE.water.goal) : 0;
  });
  chartInstances['chartWater'] = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets: [{ label: 'Water (ml)', data, backgroundColor: 'rgba(0,102,255,0.6)', borderColor: '#0066ff', borderWidth: 1, borderRadius: 6 }] },
    options: { ...CHART_DEFAULTS, plugins: { ...CHART_DEFAULTS.plugins, title: { display: true, text: 'Water Intake Last 7 Days', color: '#00f0ff', font: { family: 'Orbitron', size: 13 } } } }
  });
}

function renderProteinChart() {
  destroyChart('chartProtein');
  const ctx = document.getElementById('chartProtein').getContext('2d');
  const days=[];const labels=[];
  for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(d.toISOString().slice(0,10));labels.push(d.toLocaleDateString('en-IN',{weekday:'short'}));}
  const data = days.map(day => {
    const meals = (STATE.meals||[]).filter(m=>m.date===day);
    return meals.reduce((acc,m)=>acc+(m.protein||0),0);
  });
  chartInstances['chartProtein'] = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets: [
      { label: 'Protein (g)', data, borderColor: '#00ff88', backgroundColor: 'rgba(0,255,136,0.1)', tension: 0.4, fill: true, pointBackgroundColor: '#00ff88', pointRadius: 4 },
      { label: 'Goal', data: days.map(()=>STATE.proteinGoal||80), borderColor: 'rgba(255,136,0,0.5)', borderDash: [6,4], pointRadius: 0 }
    ]},
    options: { ...CHART_DEFAULTS, plugins: { ...CHART_DEFAULTS.plugins, title: { display: true, text: 'Protein Intake Last 7 Days', color: '#00f0ff', font: { family: 'Orbitron', size: 13 } } } }
  });
}

function renderAssignmentChart() {
  destroyChart('chartAssignment');
  const ctx = document.getElementById('chartAssignment').getContext('2d');
  const statuses = ['Not Started','In Progress','Completed','Submitted'];
  const data = statuses.map(s=>(STATE.assignments||[]).filter(a=>a.status===s).length);
  chartInstances['chartAssignment'] = new Chart(ctx, {
    type: 'doughnut',
    data: { labels: statuses, datasets: [{ data, backgroundColor: ['rgba(255,51,102,0.7)','rgba(255,136,0,0.7)','rgba(0,240,255,0.7)','rgba(0,255,136,0.7)'], borderColor: 'transparent' }] },
    options: { plugins: { legend: { labels: { color: 'rgba(232,232,240,0.7)', font: { family: 'Rajdhani' } } }, title: { display: true, text: 'Assignment Status', color: '#00f0ff', font: { family: 'Orbitron', size: 13 } } } }
  });
}

// ── ACHIEVEMENTS ──────────────────────────────────────────
function renderAchievements() {
  updateCountsFromTopics();
  const level = calculateLevel();
  document.getElementById('xpLevel').textContent = level.level;
  document.getElementById('xpProgressBar').style.width = level.pct + '%';
  document.getElementById('xpCurrent').textContent = STATE.xp;
  document.getElementById('xpNext').textContent = level.nextXP;
  document.getElementById('xpTotal').textContent = STATE.xp;
  document.getElementById('sidebarLevel').textContent = level.level;
  document.getElementById('sidebarXPBar').style.width = level.pct + '%';
  document.getElementById('sidebarXP').textContent = STATE.xp;
  document.getElementById('studyStreak').textContent = STATE.studyStreak || 0;

  const unlocked = STATE.unlockedAchievements || [];
  const html = ACHIEVEMENTS.map(a => {
    const isUnlocked = unlocked.includes(a.id);
    return `<div class="achievement-card ${isUnlocked?'unlocked':'locked'}">
      ${isUnlocked?'<div class="achievement-unlocked-badge">UNLOCKED</div>':''}
      <div class="achievement-icon">${a.icon}</div>
      <div class="achievement-name">${a.name}</div>
      <div class="achievement-desc">${a.desc}</div>
    </div>`;
  }).join('');
  document.getElementById('achievementsList').innerHTML = html;
}

function calculateLevel() {
  const xp = STATE.xp || 0;
  const thresholds = [0,100,250,500,1000,2000,3500,5000,7500,10000];
  let level = 1;
  for(let i=1;i<thresholds.length;i++) { if(xp >= thresholds[i]) level=i+1; else break; }
  const currThresh = thresholds[Math.min(level-1, thresholds.length-1)];
  const nextThresh = thresholds[Math.min(level, thresholds.length-1)];
  const pct = nextThresh > currThresh ? Math.round(((xp-currThresh)/(nextThresh-currThresh))*100) : 100;
  STATE.level = level;
  return { level, pct, nextXP: nextThresh };
}

function addXP(amount, reason) {
  STATE.xp = (STATE.xp||0) + Math.max(1, Math.floor(amount));
  const lvl = calculateLevel();
  document.getElementById('sidebarLevel').textContent = lvl.level;
  document.getElementById('sidebarXPBar').style.width = lvl.pct + '%';
  document.getElementById('sidebarXP').textContent = STATE.xp;
  saveState();
}

function checkAchievements() {
  const unlocked = STATE.unlockedAchievements || [];
  updateCountsFromTopics();
  ACHIEVEMENTS.forEach(a => {
    if (!unlocked.includes(a.id)) {
      try {
        if (a.condition(STATE)) {
          unlocked.push(a.id);
          STATE.unlockedAchievements = unlocked;
          addXP(50, "Achievement unlocked");
          showToast(`🏆 Achievement Unlocked: ${a.name}!`);
        }
      } catch(e) {}
    }
  });
  STATE.unlockedAchievements = unlocked;
  saveState();
}

// ── NOTES ─────────────────────────────────────────────────
function openNotes(topicId) {
  const td = STATE.topics[topicId]||{};
  document.getElementById('notesTopicKey').value = topicId;
  document.getElementById('notesTextarea').value = td.notes||'';
  document.getElementById('questionsTextarea').value = td.questions||'';
  switchNotesTab('notes');
  openModal('modalNotes');
}

function switchNotesTab(tab) {
  document.querySelectorAll('.notes-tab').forEach(b=>b.classList.remove('active'));
  document.querySelector(`.notes-tab:${tab==='notes'?'first-child':'last-child'}`).classList.add('active');
  document.getElementById('notesTextarea').classList.toggle('hidden', tab!=='notes');
  document.getElementById('questionsTextarea').classList.toggle('hidden', tab!=='questions');
}

function saveNotes() {
  const id = document.getElementById('notesTopicKey').value;
  if (!STATE.topics[id]) STATE.topics[id] = {};
  STATE.topics[id].notes = document.getElementById('notesTextarea').value;
  STATE.topics[id].questions = document.getElementById('questionsTextarea').value;
  saveState();
  closeModal('modalNotes');
  showToast("Notes saved!");
}

// ── SETTINGS ──────────────────────────────────────────────
function renderSettings() {
  document.getElementById('examDateInput').value = STATE.examDate||'';
  document.getElementById('studentNameInput').value = STATE.studentName||'';
}

function saveExamDate() {
  STATE.examDate = document.getElementById('examDateInput').value;
  saveState();
  showToast("Exam date saved!");
  renderCountdown();
  checkWarMode();
}

function saveProfile() {
  STATE.studentName = document.getElementById('studentNameInput').value;
  saveState();
  showToast("Profile saved!");
}

function openSetExam() {
  document.getElementById('modalExamInput').value = STATE.examDate||'';
  openModal('modalExam');
}

function saveExamFromModal() {
  STATE.examDate = document.getElementById('modalExamInput').value;
  saveState();
  closeModal('modalExam');
  renderCountdown();
  checkWarMode();
  showToast("Exam date set!");
}

function exportData() {
  const dataStr = JSON.stringify(STATE, null, 2);
  const blob = new Blob([dataStr], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bca-warroom-backup-${getTodayStr()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Backup exported!");
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      STATE = {...defaultState(), ...data};
      saveState();
      showToast("Data restored successfully!");
      renderDashboard();
    } catch(err) { showToast("Invalid backup file!", true); }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (confirm("⚠️ This will delete ALL your data. Are you absolutely sure?")) {
    STATE = defaultState();
    saveState();
    showToast("All data reset.");
    renderDashboard();
  }
}

// ── MODAL HELPERS ─────────────────────────────────────────
function openModal(id) { document.getElementById(id)?.classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id)?.classList.add('hidden'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if(e.target===m) closeModal(m.id); });
});

// ── TOAST ─────────────────────────────────────────────────
function showToast(msg, isError=false) {
  const existing = document.querySelectorAll('.toast');
  existing.forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = `toast${isError?' red':''}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateY(20px)'; t.style.transition='all 0.3s'; setTimeout(()=>t.remove(),300); }, 2800);
}

// ── DATE HELPERS ──────────────────────────────────────────
function getTodayStr() { return new Date().toISOString().slice(0,10); }

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  renderDashboard();
  calculateLevel();
  // Close sidebar on overlay click (mobile)
  document.addEventListener('click', e => {
    const sb = document.getElementById('sidebar');
    const btn = document.querySelector('.mobile-menu-btn');
    if(sb.classList.contains('open') && !sb.contains(e.target) && !btn.contains(e.target)) toggleSidebar();
  });
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(()=>{});
  }
  // Auto-check achievements on load
  setTimeout(checkAchievements, 500);
});

// PWA install prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => {
  deferredPrompt = e;
});
