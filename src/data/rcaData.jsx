// data/rcaData.js
const rcaData = [
  {
    id: 1,
    timestamp: "2025-08-19 09:15:00",
    component: "Authentication Service",
    score: 85,
    severity: "High",
    status: "Resolved",
    title: "Database Connection Pool Exhaustion",
    description: "Service became unavailable due to database connection timeouts",
    rootCause: "Long-running queries were not being properly closed, causing connection pool exhaustion. Missing try-catch-finally blocks in recent code deployment led to connection leaks.",
    recommendedSolution: "1. Implement connection monitoring alerts. 2. Update code review checklist. 3. Add automated connection leak detection in CI/CD pipeline. 4. Implement proper connection pooling best practices.",
    affectedLogs: [
      {
        timestamp: "2025-08-19 09:15:00",
        message: "Database connection timeout - pool exhausted"
      },
      {
        timestamp: "2025-08-19 09:18:00", 
        message: "Service degradation detected - 50% failure rate"
      },
      {
        timestamp: "2025-08-19 09:25:00",
        message: "Critical threshold breached - service unavailable"
      }
    ],
    actionItems: [
      {
        title: "Implement connection monitoring",
        status: "Completed",
        assignee: "Infrastructure Team"
      },
      {
        title: "Update code review process",
        status: "In Progress", 
        assignee: "Engineering Team"
      }
    ]
  },
  {
    id: 2,
    timestamp: "2025-08-18 14:30:00",
    component: "Payment Service",
    score: 92,
    severity: "Critical",
    status: "In Progress",
    title: "Payment Gateway Integration Failure",
    description: "300% increase in payment processing failures",
    rootCause: "Third-party payment gateway experiencing service degradation, returning HTTP 502 errors. No failover mechanism in place for payment processing.",
    recommendedSolution: "1. Activate backup payment processor. 2. Implement circuit breaker pattern. 3. Add retry logic with exponential backoff. 4. Set up real-time payment success rate monitoring.",
    affectedLogs: [
      {
        timestamp: "2025-08-18 14:25:00",
        message: "Payment gateway returned HTTP 502: Bad Gateway"
      },
      {
        timestamp: "2025-08-18 14:28:00",
        message: "Payment failure rate exceeded 80% threshold"
      }
    ],
    actionItems: [
      {
        title: "Setup backup payment gateway",
        status: "In Progress",
        assignee: "Payment Team"
      }
    ]
  },
  {
    id: 3,
    timestamp: "2025-08-17 11:45:00",
    component: "API Gateway",
    score: 78,
    severity: "Medium", 
    status: "Under Investigation",
    title: "Unusual Traffic Spike Detection",
    description: "10,000 requests from single IP in 5 minutes",
    rootCause: "Potential DDoS attack or misconfigured client application. No rate limiting implemented at gateway level.",
    recommendedSolution: "1. Implement rate limiting (100 req/min per IP). 2. Add IP reputation checking. 3. Enable DDoS protection. 4. Create automated blocking rules.",
    affectedLogs: [
      {
        timestamp: "2025-08-17 11:40:00",
        message: "High request rate detected: 2000 req/min from single IP"
      },
      {
        timestamp: "2025-08-17 11:45:00",
        message: "Traffic spike detected - implementing emergency rate limiting"
      }
    ],
    actionItems: [
      {
        title: "Implement rate limiting",
        status: "Under Investigation",
        assignee: "Security Team"
      }
    ]
  },
  {
    id: 4,
    timestamp: "2025-08-16 16:22:00",
    component: "File Storage Service",
    score: 89,
    severity: "High",
    status: "Resolved",
    title: "Storage Capacity Critical Threshold",
    description: "Disk space utilization reached 95% causing service degradation",
    rootCause: "Rapid accumulation of log files and temporary data without proper cleanup procedures. Additionally, recent data migrations consumed more space than anticipated.",
    recommendedSolution: "1. Implement automated log rotation and cleanup policies. 2. Add storage monitoring with predictive alerts. 3. Provision additional storage capacity. 4. Set up automated data archiving.",
    affectedLogs: [
      {
        timestamp: "2025-08-16 16:15:00",
        message: "Storage warning: Disk usage at 90%"
      },
      {
        timestamp: "2025-08-16 16:20:00",
        message: "Log cleanup service failed: Insufficient permissions"
      },
      {
        timestamp: "2025-08-16 16:22:00",
        message: "Critical: Disk space utilization at 95%"
      }
    ],
    actionItems: [
      {
        title: "Implement log rotation policy",
        status: "Completed",
        assignee: "Infrastructure Team"
      },
      {
        title: "Provision additional storage",
        status: "Completed",
        assignee: "DevOps Team"
      }
    ]
  },
  {
    id: 5,
    timestamp: "2025-08-15 13:45:00",
    component: "Cache Service",
    score: 73,
    severity: "Medium",
    status: "Resolved",
    title: "Cache Performance Degradation",
    description: "Cache hit ratio dropped from 85% to 45%",
    rootCause: "Cache invalidation strategy was too aggressive, clearing frequently accessed data. Recent application updates changed data access patterns, making current cache policies ineffective.",
    recommendedSolution: "1. Review and optimize cache invalidation policies. 2. Increase cache memory allocation. 3. Implement smarter cache warming strategies. 4. Analyze data access patterns.",
    affectedLogs: [
      {
        timestamp: "2025-08-15 13:30:00",
        message: "Cache miss rate increasing: 40% over last hour"
      },
      {
        timestamp: "2025-08-15 13:40:00",
        message: "Cache eviction rate high: 200 items/minute"
      },
      {
        timestamp: "2025-08-15 13:45:00",
        message: "Performance alert: Cache hit ratio below 50%"
      }
    ],
    actionItems: [
      {
        title: "Optimize cache policies",
        status: "Completed",
        assignee: "Backend Team"
      },
      {
        title: "Increase cache memory",
        status: "Completed",
        assignee: "Infrastructure Team"
      }
    ]
  },
  {
    id: 6,
    timestamp: "2025-08-14 10:30:00",
    component: "Email Service",
    score: 81,
    severity: "High",
    status: "In Progress",
    title: "Email Delivery Rate Degradation",
    description: "Email delivery rate dropped to 60%, 200 emails failed in last hour",
    rootCause: "SMTP server configuration issues and potential blacklisting of sending IP address by major email providers. Recent changes to email content triggered spam filters.",
    recommendedSolution: "1. Check SMTP server configuration. 2. Verify IP reputation status. 3. Implement SPF/DKIM/DMARC authentication. 4. Review email content for spam triggers.",
    affectedLogs: [
      {
        timestamp: "2025-08-14 10:15:00",
        message: "SMTP server returned 550: Mail rejected by spam filter"
      },
      {
        timestamp: "2025-08-14 10:25:00",
        message: "Email bounce rate increased: 25% over last 30 minutes"
      },
      {
        timestamp: "2025-08-14 10:30:00",
        message: "Alert: Email delivery success rate below 70%"
      }
    ],
    actionItems: [
      {
        title: "Review SMTP configuration",
        status: "In Progress",
        assignee: "DevOps Team"
      },
      {
        title: "Check IP reputation",
        status: "In Progress",
        assignee: "Security Team"
      }
    ]
  },
  {
    id: 7,
    timestamp: "2025-08-13 15:20:00",
    component: "Search Service",
    score: 76,
    severity: "Medium",
    status: "Resolved",
    title: "Search Response Time Degradation",
    description: "Average search latency increased from 500ms to 2.5 seconds",
    rootCause: "Search index fragmentation and lack of optimization. Recent data growth overwhelmed current indexing strategy, causing slow query performance.",
    recommendedSolution: "1. Rebuild and optimize search indexes. 2. Implement search result caching. 3. Add search query optimization. 4. Increase search service resources.",
    affectedLogs: [
      {
        timestamp: "2025-08-13 15:10:00",
        message: "Search query timeout: Query exceeded 5 second limit"
      },
      {
        timestamp: "2025-08-13 15:15:00",
        message: "Search index optimization required: Fragmentation at 75%"
      },
      {
        timestamp: "2025-08-13 15:20:00",
        message: "Performance degradation: Search response time 5x normal"
      }
    ],
    actionItems: [
      {
        title: "Rebuild search indexes",
        status: "Completed",
        assignee: "Search Team"
      },
      {
        title: "Implement result caching",
        status: "Completed",
        assignee: "Backend Team"
      }
    ]
  },
  {
    id: 8,
    timestamp: "2025-08-12 09:45:00",
    component: "Notification Service",
    score: 68,
    severity: "Low",
    status: "Resolved",
    title: "Push Notification Delivery Delays",
    description: "Average delivery time increased from 2s to 15s",
    rootCause: "Third-party push notification service experiencing latency issues. Queue buildup due to rate limiting from notification providers during peak hours.",
    recommendedSolution: "1. Implement notification queue management with priority levels. 2. Add multiple push providers for redundancy. 3. Optimize notification batching. 4. Implement retry logic.",
    affectedLogs: [
      {
        timestamp: "2025-08-12 09:30:00",
        message: "Push notification queue size: 5000 pending notifications"
      },
      {
        timestamp: "2025-08-12 09:40:00",
        message: "FCM service rate limit encountered: Throttling requests"
      },
      {
        timestamp: "2025-08-12 09:45:00",
        message: "Notification delivery SLA breached: Average latency 15s"
      }
    ],
    actionItems: [
      {
        title: "Optimize notification batching",
        status: "Completed",
        assignee: "Mobile Team"
      },
      {
        title: "Add backup providers",
        status: "Completed",
        assignee: "Infrastructure Team"
      }
    ]
  },
  {
    id: 9,
    timestamp: "2025-08-11 14:15:00",
    component: "Load Balancer",
    score: 84,
    severity: "High",
    status: "Resolved",
    title: "Load Balancer Misconfiguration",
    description: "Server 3 handling 70% of traffic while others idle",
    rootCause: "Load balancer health check configuration incorrectly marking healthy servers as unavailable. Sticky session configuration directing all traffic to single server.",
    recommendedSolution: "1. Review and fix health check endpoints. 2. Adjust load balancing algorithm from sticky sessions to round-robin. 3. Verify server health status. 4. Implement proper session affinity.",
    affectedLogs: [
      {
        timestamp: "2025-08-11 14:00:00",
        message: "Health check failed for server-1: Connection timeout"
      },
      {
        timestamp: "2025-08-11 14:10:00",
        message: "Health check failed for server-2: HTTP 500 response"
      },
      {
        timestamp: "2025-08-11 14:15:00",
        message: "Load distribution warning: Single server handling 70%"
      }
    ],
    actionItems: [
      {
        title: "Fix health check configuration",
        status: "Completed",
        assignee: "DevOps Team"
      },
      {
        title: "Update load balancing algorithm",
        status: "Completed",
        assignee: "Infrastructure Team"
      }
    ]
  },
  {
    id: 10,
    timestamp: "2025-08-10 02:30:00",
    component: "Backup Service",
    score: 91,
    severity: "Critical",
    status: "Resolved",
    title: "Backup System Failure",
    description: "Daily backup failed for third consecutive day",
    rootCause: "Backup storage destination full and backup service lacks proper error handling. Network connectivity issues to backup storage location causing intermittent failures.",
    recommendedSolution: "1. Provision additional backup storage capacity. 2. Implement backup retention policies. 3. Add network redundancy for backup operations. 4. Create monitoring alerts.",
    affectedLogs: [
      {
        timestamp: "2025-08-10 02:00:00",
        message: "Backup job started: Daily backup sequence initiated"
      },
      {
        timestamp: "2025-08-10 02:25:00",
        message: "Backup error: Destination storage full - 0 bytes available"
      },
      {
        timestamp: "2025-08-10 02:30:00",
        message: "Critical: Backup failure - Data protection SLA violated"
      }
    ],
    actionItems: [
      {
        title: "Provision backup storage",
        status: "Completed",
        assignee: "Infrastructure Team"
      },
      {
        title: "Implement retention policies",
        status: "Completed",
        assignee: "DevOps Team"
      }
    ]
  },
  {
    id: 11,
    timestamp: "2025-08-09 16:40:00",
    component: "Session Management",
    score: 79,
    severity: "Medium",
    status: "Resolved",
    title: "Session Timeout Configuration Issue",
    description: "Session timeout rate increased by 250%, users experiencing premature expiration",
    rootCause: "Recent security update changed default session timeout from 30 minutes to 5 minutes without proper configuration adjustment. Memory pressure causing premature cleanup.",
    recommendedSolution: "1. Adjust session timeout to appropriate duration. 2. Increase session storage capacity. 3. Implement session persistence mechanism. 4. Add user notification before expiry.",
    affectedLogs: [
      {
        timestamp: "2025-08-09 16:30:00",
        message: "Session cleanup: Removed 500 expired sessions"
      },
      {
        timestamp: "2025-08-09 16:35:00",
        message: "Memory warning: Session storage at 95% capacity"
      },
      {
        timestamp: "2025-08-09 16:40:00",
        message: "User experience alert: High session timeout rate detected"
      }
    ],
    actionItems: [
      {
        title: "Adjust session timeout",
        status: "Completed",
        assignee: "Backend Team"
      },
      {
        title: "Increase session storage",
        status: "Completed",
        assignee: "Infrastructure Team"
      }
    ]
  },
  {
    id: 12,
    timestamp: "2025-08-08 12:20:00",
    component: "Image Processing Service",
    score: 86,
    severity: "High",
    status: "In Progress",
    title: "Image Processing Queue Overflow",
    description: "5000 pending jobs, processing time increased from 2s to 30s per image",
    rootCause: "Recent increase in high-resolution image uploads overwhelmed processing capacity. Single-threaded processing approach cannot handle volume and complexity of modern image formats.",
    recommendedSolution: "1. Implement parallel processing with worker pools. 2. Add image compression before processing. 3. Introduce job prioritization system. 4. Scale processing infrastructure horizontally.",
    affectedLogs: [
      {
        timestamp: "2025-08-08 12:10:00",
        message: "Processing queue warning: 2000 jobs pending"
      },
      {
        timestamp: "2025-08-08 12:15:00",
        message: "Image processing timeout: Job exceeded 60 second limit"
      },
      {
        timestamp: "2025-08-08 12:20:00",
        message: "Critical: Processing queue overflow - 5000 pending jobs"
      }
    ],
    actionItems: [
      {
        title: "Implement parallel processing",
        status: "In Progress",
        assignee: "Backend Team"
      },
      {
        title: "Scale processing infrastructure",
        status: "In Progress",
        assignee: "DevOps Team"
      }
    ]
  },
  {
    id: 13,
    timestamp: "2025-08-07 18:55:00",
    component: "Analytics Service",
    score: 72,
    severity: "Medium",
    status: "Resolved",
    title: "Real-time Analytics Lag",
    description: "Analytics lag increased to 10 minutes, data processing pipeline delayed",
    rootCause: "Data ingestion rate exceeded processing capacity due to increased user activity. Stream processing framework experiencing backpressure from downstream consumers.",
    recommendedSolution: "1. Scale analytics processing nodes. 2. Implement data sampling for non-critical metrics. 3. Optimize stream processing queries. 4. Add data buffering with overflow protection.",
    affectedLogs: [
      {
        timestamp: "2025-08-07 18:45:00",
        message: "Stream processing lag detected: 5 minute delay"
      },
      {
        timestamp: "2025-08-07 18:50:00",
        message: "Data buffer warning: 80% capacity reached"
      },
      {
        timestamp: "2025-08-07 18:55:00",
        message: "Analytics SLA breach: Real-time data lag exceeds 10 minutes"
      }
    ],
    actionItems: [
      {
        title: "Scale processing nodes",
        status: "Completed",
        assignee: "Analytics Team"
      },
      {
        title: "Optimize stream queries",
        status: "Completed",
        assignee: "Backend Team"
      }
    ]
  },
  {
    id: 14,
    timestamp: "2025-08-06 21:10:00",
    component: "CDN Service",
    score: 77,
    severity: "Medium",
    status: "Resolved",
    title: "CDN Cache Efficiency Degradation",
    description: "Cache miss ratio increased to 65%, static asset delivery performance degraded",
    rootCause: "Recent website deployment included cache-busting parameters on all static assets, causing widespread cache invalidation. CDN edge servers experiencing higher than normal cache misses.",
    recommendedSolution: "1. Optimize cache-busting strategy for changed assets only. 2. Increase CDN cache TTL for stable content. 3. Implement smarter cache invalidation patterns. 4. Pre-warm CDN caches after deployments.",
    affectedLogs: [
      {
        timestamp: "2025-08-06 21:00:00",
        message: "CDN cache invalidation: 10,000 assets marked for refresh"
      },
      {
        timestamp: "2025-08-06 21:05:00",
        message: "Origin server load increased: CDN cache miss spike"
      },
      {
        timestamp: "2025-08-06 21:10:00",
        message: "Performance alert: CDN efficiency below 40% threshold"
      }
    ],
    actionItems: [
      {
        title: "Optimize cache-busting strategy",
        status: "Completed",
        assignee: "Frontend Team"
      },
      {
        title: "Implement cache pre-warming",
        status: "Completed",
        assignee: "DevOps Team"
      }
    ]
  },
  {
    id: 15,
    timestamp: "2025-08-05 14:25:00",
    component: "Message Queue",
    score: 88,
    severity: "High",
    status: "Resolved",
    title: "Message Queue Consumer Lag",
    description: "Message queue depth exceeded 50,000 messages, consumer lag increased dramatically",
    rootCause: "Message consumers failing due to downstream service unavailability, causing message accumulation. Recent deployment introduced bug in message processing logic.",
    recommendedSolution: "1. Scale message consumer instances. 2. Implement dead letter queue for failed messages. 3. Add consumer health monitoring. 4. Optimize message processing logic.",
    affectedLogs: [
      {
        timestamp: "2025-08-05 14:15:00",
        message: "Consumer group lag warning: 10,000 messages behind"
      },
      {
        timestamp: "2025-08-05 14:20:00",
        message: "Message processing error: Consumer timeout after 30 seconds"
      },
      {
        timestamp: "2025-08-05 14:25:00",
        message: "Critical: Message queue overflow - 50,000+ pending messages"
      }
    ],
    actionItems: [
      {
        title: "Scale consumer instances",
        status: "Completed",
        assignee: "Backend Team"
      },
      {
        title: "Implement dead letter queue",
        status: "Completed",
        assignee: "Infrastructure Team"
      }
    ]
  },
  {
    id: 16,
    timestamp: "2025-08-04 11:40:00",
    component: "Monitoring Service",
    score: 71,
    severity: "Medium",
    status: "Resolved",
    title: "Metrics Collection Latency",
    description: "Metrics collection latency increased by 200%, dashboard updates delayed 5-10 minutes",
    rootCause: "Metrics database experiencing high write load due to increased monitoring granularity. Time-series data retention policies not properly archiving old data.",
    recommendedSolution: "1. Optimize metrics aggregation intervals. 2. Implement proper data retention and archiving policies. 3. Scale monitoring database infrastructure. 4. Add metrics sampling.",
    affectedLogs: [
      {
        timestamp: "2025-08-04 11:30:00",
        message: "Metrics database slow query: INSERT took 15 seconds"
      },
      {
        timestamp: "2025-08-04 11:35:00",
        message: "Dashboard refresh timeout: Data query exceeded limit"
      },
      {
        timestamp: "2025-08-04 11:40:00",
        message: "Monitoring lag alert: Dashboard data delayed by 8 minutes"
      }
    ],
    actionItems: [
      {
        title: "Optimize aggregation intervals",
        status: "Completed",
        assignee: "Monitoring Team"
      },
      {
        title: "Scale database infrastructure",
        status: "Completed",
        assignee: "Infrastructure Team"
      }
    ]
  },
  {
    id: 17,
    timestamp: "2025-08-03 17:30:00",
    component: "User Service",
    score: 83,
    severity: "High",
    status: "Resolved",
    title: "User Registration System Failure",
    description: "User registration rate dropped by 80%, only 50 new registrations vs normal 250 per hour",
    rootCause: "Email verification service down, preventing completion of user registration flow. SMTP authentication credentials expired, causing email delivery failures.",
    recommendedSolution: "1. Update SMTP credentials immediately. 2. Implement backup email service providers. 3. Add email service health monitoring. 4. Create alternative registration flow.",
    affectedLogs: [
      {
        timestamp: "2025-08-03 17:20:00",
        message: "Email verification failed: SMTP authentication error"
      },
      {
        timestamp: "2025-08-03 17:25:00",
        message: "User registration incomplete: Email verification timeout"
      },
      {
        timestamp: "2025-08-03 17:30:00",
        message: "Business impact: User acquisition rate critically low"
      }
    ],
    actionItems: [
      {
        title: "Update SMTP credentials",
        status: "Completed",
        assignee: "DevOps Team"
      },
      {
        title: "Implement backup email providers",
        status: "Completed",
        assignee: "Backend Team"
      }
    ]
  },
  {
    id: 18,
    timestamp: "2025-08-02 20:15:00",
    component: "Logging Service",
    score: 75,
    severity: "Medium",
    status: "Resolved",
    title: "Log Ingestion Rate Decrease",
    description: "Log ingestion rate decreased by 60%, missing logs from multiple services for 2 hours",
    rootCause: "Log aggregation service dropping messages due to insufficient processing capacity. Network connectivity issues between application servers and logging infrastructure.",
    recommendedSolution: "1. Scale log processing infrastructure. 2. Implement log buffering at source. 3. Add network redundancy for log transmission. 4. Create log delivery monitoring with retry mechanisms.",
    affectedLogs: [
      {
        timestamp: "2025-08-02 18:20:00",
        message: "Log aggregator warning: Processing capacity at 95%"
      },
      {
        timestamp: "2025-08-02 19:15:00",
        message: "Log transmission failure: Network timeout to logging service"
      },
      {
        timestamp: "2025-08-02 20:15:00",
        message: "Observability alert: 60% reduction in log ingestion rate"
      }
    ],
    actionItems: [
      {
        title: "Scale log processing",
        status: "Completed",
        assignee: "Infrastructure Team"
      },
      {
        title: "Add network redundancy",
        status: "Completed",
        assignee: "DevOps Team"
      }
    ]
  },
  {
    id: 19,
    timestamp: "2025-08-01 13:50:00",
    component: "Security Service",
    score: 94,
    severity: "Critical",
    status: "In Progress",
    title: "Malware Upload Security Incident",
    description: "Multiple malware signatures found in uploaded files, suspicious activity detected",
    rootCause: "File upload validation bypassed through content-type spoofing and filename manipulation. Malicious actors attempting to upload executable files disguised as image files.",
    recommendedSolution: "1. Implement comprehensive file validation including content inspection. 2. Add real-time malware scanning. 3. Restrict file upload types. 4. Implement file quarantine system. 5. Enhance security monitoring.",
    affectedLogs: [
      {
        timestamp: "2025-08-01 13:40:00",
        message: "Malware detected: Trojan.Generic.12345 in uploaded file"
      },
      {
        timestamp: "2025-08-01 13:45:00",
        message: "Security alert: Multiple malicious uploads from IP 185.220.101.42"
      },
      {
        timestamp: "2025-08-01 13:50:00",
        message: "Critical security incident: Active malware upload campaign detected"
      }
    ],
    actionItems: [
      {
        title: "Implement file content inspection",
        status: "In Progress",
        assignee: "Security Team"
      },
      {
        title: "Add real-time malware scanning",
        status: "In Progress",
        assignee: "Infrastructure Team"
      },
      {
        title: "Block malicious IP addresses",
        status: "Completed",
        assignee: "Security Team"
      }
    ]
  },
  {
    id: 20,
    timestamp: "2025-07-31 09:25:00",
    component: "Deployment Service",
    score: 69,
    severity: "Low",
    status: "Under Investigation",
    title: "Deployment Pipeline Slow Performance",
    description: "CI/CD pipeline execution time increased from 8 minutes to 25 minutes",
    rootCause: "Build agents experiencing resource constraints due to increased parallel job execution. Docker image layers not being cached efficiently, causing repeated downloads of large base images.",
    recommendedSolution: "1. Scale build agent infrastructure. 2. Optimize Docker layer caching strategy. 3. Implement build artifact caching. 4. Add build performance monitoring. 5. Optimize build scripts and dependencies.",
    affectedLogs: [
      {
        timestamp: "2025-07-31 09:15:00",
        message: "Build agent resource warning: CPU at 95%, Memory at 87%"
      },
      {
        timestamp: "2025-07-31 09:20:00",
        message: "Docker layer cache miss: Downloading 2.5GB base image"
      },
      {
        timestamp: "2025-07-31 09:25:00",
        message: "Deployment SLA breach: Pipeline exceeded 20 minute threshold"
      }
    ],
    actionItems: [
      {
        title: "Scale build infrastructure",
        status: "Under Investigation",
        assignee: "DevOps Team"
      },
      {
        title: "Optimize Docker caching",
        status: "Under Investigation",
        assignee: "Platform Team"
      }
    ]
  }
];

export default rcaData;
