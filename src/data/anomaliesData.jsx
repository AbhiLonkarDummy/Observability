const anomaliesData = [
  {
    id: 1,
    timestamp: "2025-08-06 14:32:10",
    component: "Authentication Service",
    score: 87,
    urgency: "High",
    message: "Multiple failed login attempts detected.",
    details: "5 failed login attempts from IP 192.168.1.22 within 2 minutes.",
    title: "Brute Force Attack Detection",
    rootCause:
      "An automated script or malicious actor is attempting to gain unauthorized access by systematically trying different password combinations. The attack pattern shows rapid sequential attempts from a single IP address, indicating a potential brute force attack.",
    recommendedSolution:
      "Implement rate limiting for login attempts, add IP-based blocking after multiple failures, enable CAPTCHA verification after 3 failed attempts, and set up real-time alerts for suspicious login patterns. Consider implementing account lockout policies and multi-factor authentication.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 14:30:15",
        message: "Login attempt failed for user 'admin' from IP 192.168.1.22",
      },
      {
        timestamp: "2025-08-06 14:30:45",
        message:
          "Login attempt failed for user 'administrator' from IP 192.168.1.22",
      },
      {
        timestamp: "2025-08-06 14:31:20",
        message: "Login attempt failed for user 'root' from IP 192.168.1.22",
      },
      {
        timestamp: "2025-08-06 14:32:10",
        message:
          "Anomaly detected: Multiple failed login attempts from single IP",
      },
    ],
  },
  {
    id: 2,
    timestamp: "2025-08-06 15:45:33",
    component: "Database Service",
    score: 92,
    urgency: "High",
    message: "Database connection pool exhausted.",
    details: "All 50 database connections in use, new requests timing out.",
    title: "Database Connection Pool Exhaustion",
    rootCause:
      "Long-running queries are not being properly closed, causing connection leaks. Additionally, a recent increase in user traffic has overwhelmed the current connection pool capacity without proper scaling mechanisms in place.",
    recommendedSolution:
      "Increase connection pool size to 100, implement connection timeout policies (30s max), add query optimization for slow queries, and set up connection pool monitoring with automatic scaling. Review and fix connection leak issues in application code.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 15:43:10",
        message: "Connection pool warning: 45/50 connections in use",
      },
      {
        timestamp: "2025-08-06 15:44:15",
        message: "Connection timeout: Unable to acquire connection within 30s",
      },
      {
        timestamp: "2025-08-06 15:45:33",
        message:
          "Critical: Database connection pool exhausted - 0 available connections",
      },
    ],
  },
  {
    id: 3,
    timestamp: "2025-08-06 16:22:45",
    component: "API Gateway",
    score: 78,
    urgency: "Medium",
    message: "Unusual traffic spike from single source.",
    details: "10,000 requests from IP 203.45.67.89 in the last 5 minutes.",
    title: "Potential DDoS Attack Pattern",
    rootCause:
      "A single IP address is generating an abnormally high volume of requests, potentially indicating a distributed denial-of-service attack or misconfigured client application sending requests in a tight loop.",
    recommendedSolution:
      "Implement rate limiting at API gateway level (100 requests/minute per IP), add IP reputation checking, enable DDoS protection services, and create automated blocking rules for suspicious traffic patterns.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 16:18:12",
        message: "High request rate detected from IP 203.45.67.89: 500 req/min",
      },
      {
        timestamp: "2025-08-06 16:20:30",
        message:
          "Request rate exceeded threshold: 2000 req/min from 203.45.67.89",
      },
      {
        timestamp: "2025-08-06 16:22:45",
        message:
          "Anomaly: Traffic spike - 10,000 requests from single IP in 5 minutes",
      },
    ],
  },
  {
    id: 4,
    timestamp: "2025-08-06 17:10:22",
    component: "Payment Service",
    score: 95,
    urgency: "High",
    message: "Payment processing failures increased by 300%.",
    details: "45 failed transactions in the last 10 minutes vs normal 12/hour.",
    title: "Payment Gateway Integration Failure",
    rootCause:
      "The third-party payment gateway is experiencing service degradation, returning HTTP 502 errors for transaction requests. This appears to be an external service outage affecting payment processing capabilities.",
    recommendedSolution:
      "Activate backup payment processor immediately, implement circuit breaker pattern for payment gateway calls, add retry logic with exponential backoff, and set up real-time monitoring for payment success rates with automatic failover.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 17:05:15",
        message: "Payment gateway returned HTTP 502: Bad Gateway",
      },
      {
        timestamp: "2025-08-06 17:07:30",
        message: "Transaction ID 12345 failed: Gateway timeout",
      },
      {
        timestamp: "2025-08-06 17:10:22",
        message: "Critical: Payment failure rate exceeded 80% threshold",
      },
    ],
  },
  {
    id: 5,
    timestamp: "2025-08-06 18:33:17",
    component: "File Storage Service",
    score: 89,
    urgency: "High",
    message: "Disk space utilization reached 95%.",
    details: "Only 500GB free space remaining on primary storage volume.",
    title: "Storage Capacity Critical Threshold",
    rootCause:
      "Rapid accumulation of log files and temporary data without proper cleanup procedures. Additionally, recent data migrations have consumed more space than anticipated, approaching storage limits.",
    recommendedSolution:
      "Implement automated log rotation and cleanup policies, add storage monitoring with predictive alerts, provision additional storage capacity, and set up automated data archiving for older files.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 18:20:45",
        message: "Storage warning: Disk usage at 90%",
      },
      {
        timestamp: "2025-08-06 18:30:10",
        message: "Log cleanup service failed: Insufficient permissions",
      },
      {
        timestamp: "2025-08-06 18:33:17",
        message:
          "Critical: Disk space utilization at 95% - immediate action required",
      },
    ],
  },
  {
    id: 6,
    timestamp: "2025-08-06 19:15:44",
    component: "Cache Service",
    score: 73,
    urgency: "Medium",
    message: "Cache hit ratio dropped to 45%.",
    details: "Normal cache hit ratio is 85%, current performance degraded.",
    title: "Cache Performance Degradation",
    rootCause:
      "Cache invalidation strategy is too aggressive, clearing frequently accessed data. Recent application updates have changed data access patterns, making current cache policies ineffective.",
    recommendedSolution:
      "Review and optimize cache invalidation policies, increase cache memory allocation, implement smarter cache warming strategies, and analyze data access patterns to improve cache key design.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 19:10:20",
        message: "Cache miss rate increasing: 40% over last hour",
      },
      {
        timestamp: "2025-08-06 19:12:35",
        message: "Cache eviction rate high: 200 items/minute",
      },
      {
        timestamp: "2025-08-06 19:15:44",
        message: "Performance alert: Cache hit ratio below 50% threshold",
      },
    ],
  },
  {
    id: 7,
    timestamp: "2025-08-06 20:42:18",
    component: "Email Service",
    score: 81,
    urgency: "High",
    message: "Email delivery rate dropped to 60%.",
    details: "200 emails failed to send in the last hour.",
    title: "Email Service Delivery Issues",
    rootCause:
      "SMTP server configuration issues and potential blacklisting of sending IP address by major email providers. Recent changes to email content may have triggered spam filters.",
    recommendedSolution:
      "Check SMTP server configuration, verify IP reputation status, implement SPF/DKIM/DMARC authentication, review email content for spam triggers, and set up alternative SMTP providers for redundancy.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 20:35:12",
        message: "SMTP server returned 550: Mail rejected by spam filter",
      },
      {
        timestamp: "2025-08-06 20:38:45",
        message: "Email bounce rate increased: 25% over last 30 minutes",
      },
      {
        timestamp: "2025-08-06 20:42:18",
        message: "Alert: Email delivery success rate below 70% threshold",
      },
    ],
  },
  {
    id: 8,
    timestamp: "2025-08-06 21:28:55",
    component: "Search Service",
    score: 76,
    urgency: "Medium",
    message: "Search response time increased by 400%.",
    details: "Average search latency now 2.5 seconds vs normal 500ms.",
    title: "Search Performance Degradation",
    rootCause:
      "Search index fragmentation and lack of optimization. Recent data growth has overwhelmed current indexing strategy, causing slow query performance and increased resource consumption.",
    recommendedSolution:
      "Rebuild and optimize search indexes, implement search result caching, add search query optimization, increase search service resources, and consider implementing search result pagination.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 21:20:30",
        message: "Search query timeout: Query exceeded 5 second limit",
      },
      {
        timestamp: "2025-08-06 21:25:15",
        message: "Search index optimization required: Fragmentation at 75%",
      },
      {
        timestamp: "2025-08-06 21:28:55",
        message: "Performance degradation: Search response time 5x normal",
      },
    ],
  },
  {
    id: 9,
    timestamp: "2025-08-06 22:14:32",
    component: "Notification Service",
    score: 68,
    urgency: "Low",
    message: "Push notification delivery delays detected.",
    details: "Average delivery time increased from 2s to 15s.",
    title: "Push Notification Latency Issues",
    rootCause:
      "Third-party push notification service experiencing latency issues. Queue buildup due to rate limiting from notification providers and increased notification volume during peak hours.",
    recommendedSolution:
      "Implement notification queue management with priority levels, add multiple push notification providers for redundancy, optimize notification batching, and implement delivery retry logic with exponential backoff.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 22:10:45",
        message: "Push notification queue size: 5000 pending notifications",
      },
      {
        timestamp: "2025-08-06 22:12:20",
        message: "FCM service rate limit encountered: Throttling requests",
      },
      {
        timestamp: "2025-08-06 22:14:32",
        message:
          "Notification delivery SLA breached: Average latency 15 seconds",
      },
    ],
  },
  {
    id: 10,
    timestamp: "2025-08-07 08:45:21",
    component: "Load Balancer",
    score: 84,
    urgency: "High",
    message: "Uneven traffic distribution detected.",
    details: "Server 3 handling 70% of traffic while others idle.",
    title: "Load Balancer Misconfiguration",
    rootCause:
      "Load balancer health check configuration is incorrectly marking healthy servers as unavailable. Sticky session configuration is directing all traffic to a single server instead of distributing evenly.",
    recommendedSolution:
      "Review and fix health check endpoints, adjust load balancing algorithm from sticky sessions to round-robin, verify server health status, and implement proper session affinity configuration.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 08:40:15",
        message: "Health check failed for server-1: Connection timeout",
      },
      {
        timestamp: "2025-08-07 08:42:30",
        message: "Health check failed for server-2: HTTP 500 response",
      },
      {
        timestamp: "2025-08-07 08:45:21",
        message:
          "Load distribution warning: Single server handling 70% of traffic",
      },
    ],
  },
  {
    id: 11,
    timestamp: "2025-08-07 09:30:45",
    component: "Backup Service",
    score: 91,
    urgency: "High",
    message: "Daily backup failed for third consecutive day.",
    details: "Backup process terminated with error code 255.",
    title: "Critical Backup System Failure",
    rootCause:
      "Backup storage destination is full and backup service lacks proper error handling. Network connectivity issues to backup storage location are causing intermittent failures during data transfer.",
    recommendedSolution:
      "Provision additional backup storage capacity, implement backup retention policies to remove old backups, add network redundancy for backup operations, and create monitoring alerts for backup job status.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 02:00:15",
        message: "Backup job started: Daily backup sequence initiated",
      },
      {
        timestamp: "2025-08-07 03:45:30",
        message: "Backup error: Destination storage full - 0 bytes available",
      },
      {
        timestamp: "2025-08-07 09:30:45",
        message: "Critical: Backup failure - Data protection SLA violated",
      },
    ],
  },
  {
    id: 12,
    timestamp: "2025-08-07 10:22:18",
    component: "Session Management",
    score: 79,
    urgency: "Medium",
    message: "Session timeout rate increased by 250%.",
    details: "Users experiencing premature session expiration.",
    title: "Session Management Configuration Issue",
    rootCause:
      "Recent security update changed default session timeout from 30 minutes to 5 minutes without proper configuration adjustment. Memory pressure on session storage is causing premature session cleanup.",
    recommendedSolution:
      "Adjust session timeout configuration to appropriate duration, increase session storage capacity, implement session persistence mechanism, and add user notification before session expiry.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 10:15:30",
        message: "Session cleanup: Removed 500 expired sessions",
      },
      {
        timestamp: "2025-08-07 10:18:45",
        message: "Memory warning: Session storage at 95% capacity",
      },
      {
        timestamp: "2025-08-07 10:22:18",
        message: "User experience alert: High session timeout rate detected",
      },
    ],
  },
  {
    id: 13,
    timestamp: "2025-08-07 11:55:33",
    component: "Image Processing Service",
    score: 86,
    urgency: "High",
    message: "Image processing queue backed up with 5000 pending jobs.",
    details: "Processing time per image increased from 2s to 30s.",
    title: "Image Processing Performance Bottleneck",
    rootCause:
      "Recent increase in high-resolution image uploads has overwhelmed processing capacity. Current single-threaded processing approach cannot handle the volume and complexity of modern image formats.",
    recommendedSolution:
      "Implement parallel image processing with worker pools, add image compression before processing, introduce job prioritization system, and scale processing infrastructure horizontally.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 11:45:15",
        message: "Processing queue warning: 2000 jobs pending",
      },
      {
        timestamp: "2025-08-07 11:50:20",
        message: "Image processing timeout: Job exceeded 60 second limit",
      },
      {
        timestamp: "2025-08-07 11:55:33",
        message:
          "Critical: Image processing queue overflow - 5000 pending jobs",
      },
    ],
  },
  {
    id: 14,
    timestamp: "2025-08-07 13:12:44",
    component: "Analytics Service",
    score: 72,
    urgency: "Medium",
    message: "Real-time analytics lag increased to 10 minutes.",
    details: "Data processing pipeline experiencing significant delays.",
    title: "Analytics Pipeline Performance Issues",
    rootCause:
      "Data ingestion rate has exceeded processing capacity due to increased user activity. Stream processing framework is experiencing backpressure from downstream consumers unable to keep up with data volume.",
    recommendedSolution:
      "Scale analytics processing nodes, implement data sampling for non-critical metrics, optimize stream processing queries, and add data buffering with overflow protection.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 13:05:20",
        message: "Stream processing lag detected: 5 minute delay",
      },
      {
        timestamp: "2025-08-07 13:08:35",
        message: "Data buffer warning: 80% capacity reached",
      },
      {
        timestamp: "2025-08-07 13:12:44",
        message: "Analytics SLA breach: Real-time data lag exceeds 10 minutes",
      },
    ],
  },
  {
    id: 15,
    timestamp: "2025-08-07 14:38:22",
    component: "CDN Service",
    score: 77,
    urgency: "Medium",
    message: "CDN cache miss ratio increased to 65%.",
    details: "Static asset delivery performance degraded significantly.",
    title: "CDN Cache Efficiency Degradation",
    rootCause:
      "Recent website deployment included cache-busting parameters on all static assets, causing widespread cache invalidation. CDN edge servers are experiencing higher than normal cache misses due to frequent content updates.",
    recommendedSolution:
      "Optimize cache-busting strategy to only affect changed assets, increase CDN cache TTL for stable content, implement smarter cache invalidation patterns, and pre-warm CDN caches after deployments.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 14:30:15",
        message: "CDN cache invalidation: 10,000 assets marked for refresh",
      },
      {
        timestamp: "2025-08-07 14:35:20",
        message: "Origin server load increased: CDN cache miss spike",
      },
      {
        timestamp: "2025-08-07 14:38:22",
        message: "Performance alert: CDN efficiency below 40% threshold",
      },
    ],
  },
  {
    id: 16,
    timestamp: "2025-08-07 15:47:15",
    component: "Message Queue",
    score: 88,
    urgency: "High",
    message: "Message queue depth exceeded 50,000 messages.",
    details: "Consumer lag increased dramatically in the last hour.",
    title: "Message Queue Consumer Lag",
    rootCause:
      "Message consumers are failing due to downstream service unavailability, causing message accumulation. Recent deployment introduced a bug in message processing logic, leading to increased processing time per message.",
    recommendedSolution:
      "Scale message consumer instances, implement dead letter queue for failed messages, add consumer health monitoring, and optimize message processing logic to reduce processing time.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 15:40:30",
        message: "Consumer group lag warning: 10,000 messages behind",
      },
      {
        timestamp: "2025-08-07 15:43:45",
        message: "Message processing error: Consumer timeout after 30 seconds",
      },
      {
        timestamp: "2025-08-07 15:47:15",
        message: "Critical: Message queue overflow - 50,000+ pending messages",
      },
    ],
  },
  {
    id: 17,
    timestamp: "2025-08-07 16:25:38",
    component: "Monitoring Service",
    score: 71,
    urgency: "Low",
    message: "Metrics collection latency increased by 200%.",
    details: "Dashboard updates delayed by 5-10 minutes.",
    title: "Monitoring System Performance Issues",
    rootCause:
      "Metrics database is experiencing high write load due to increased monitoring granularity. Time-series data retention policies are not properly archiving old data, causing database performance degradation.",
    recommendedSolution:
      "Optimize metrics aggregation intervals, implement proper data retention and archiving policies, scale monitoring database infrastructure, and add metrics sampling for high-frequency data.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 16:20:15",
        message: "Metrics database slow query: INSERT took 15 seconds",
      },
      {
        timestamp: "2025-08-07 16:23:20",
        message: "Dashboard refresh timeout: Data query exceeded limit",
      },
      {
        timestamp: "2025-08-07 16:25:38",
        message: "Monitoring lag alert: Dashboard data delayed by 8 minutes",
      },
    ],
  },
  {
    id: 18,
    timestamp: "2025-08-07 17:44:52",
    component: "User Service",
    score: 83,
    urgency: "High",
    message: "User registration rate dropped by 80%.",
    details: "Only 50 new registrations vs normal 250 per hour.",
    title: "User Registration System Failure",
    rootCause:
      "Email verification service is down, preventing completion of user registration flow. SMTP authentication credentials expired, causing email delivery failures and blocking new user onboarding.",
    recommendedSolution:
      "Update SMTP credentials immediately, implement backup email service providers, add email service health monitoring, and create alternative registration flow that doesn't require immediate email verification.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 17:35:20",
        message: "Email verification failed: SMTP authentication error",
      },
      {
        timestamp: "2025-08-07 17:40:15",
        message: "User registration incomplete: Email verification timeout",
      },
      {
        timestamp: "2025-08-07 17:44:52",
        message: "Business impact: User acquisition rate critically low",
      },
    ],
  },
  {
    id: 19,
    timestamp: "2025-08-07 18:19:27",
    component: "Logging Service",
    score: 75,
    urgency: "Medium",
    message: "Log ingestion rate decreased by 60%.",
    details: "Missing logs from multiple services for the last 2 hours.",
    title: "Centralized Logging System Issues",
    rootCause:
      "Log aggregation service is dropping messages due to insufficient processing capacity. Network connectivity issues between application servers and logging infrastructure are causing log transmission failures.",
    recommendedSolution:
      "Scale log processing infrastructure, implement log buffering at source, add network redundancy for log transmission, and create log delivery monitoring with automatic retry mechanisms.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 16:20:15",
        message: "Log aggregator warning: Processing capacity at 95%",
      },
      {
        timestamp: "2025-08-07 17:15:30",
        message: "Log transmission failure: Network timeout to logging service",
      },
      {
        timestamp: "2025-08-07 18:19:27",
        message: "Observability alert: 60% reduction in log ingestion rate",
      },
    ],
  },
  {
    id: 20,
    timestamp: "2025-08-07 19:33:41",
    component: "Security Service",
    score: 94,
    urgency: "High",
    message: "Suspicious file upload activity detected.",
    details: "Multiple malware signatures found in uploaded files.",
    title: "Malware Upload Security Incident",
    rootCause:
      "File upload validation is bypassed through content-type spoofing and filename manipulation. Malicious actors are attempting to upload executable files disguised as image files to compromise system security.",
    recommendedSolution:
      "Implement comprehensive file validation including content inspection, add real-time malware scanning, restrict file upload types, implement file quarantine system, and enhance security monitoring for upload endpoints.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 19:25:15",
        message: "Malware detected: Trojan.Generic.12345 in uploaded file",
      },
      {
        timestamp: "2025-08-07 19:30:20",
        message:
          "Security alert: Multiple malicious uploads from IP 185.220.101.42",
      },
      {
        timestamp: "2025-08-07 19:33:41",
        message:
          "Critical security incident: Active malware upload campaign detected",
      },
    ],
  },
];

export default anomaliesData;
