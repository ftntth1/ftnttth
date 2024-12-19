function FindProxyForURL(url, host) {
    // Check for exempted domains
    if (dnsDomainIs(host, "login.microsoftonline.com") || // Matches all *.login.microsoftonline.com
        shExpMatch(host, "sts.windows.net"))|| // Exact match for sts.windows.net
        return "DIRECT";
    }

    // Default proxy for all other URLs
    return "PROXY turbo-cor2rehu.edge.prod.fortisase.com:11418; DIRECT";
}
