import requests

# GitHub API Token
TOKEN = ''
REPO = 'your_username/your_new_repo'

# Define headers
headers = {
    'Authorization': f'token {TOKEN}',
    'Accept': 'application/vnd.github.v3+json'
}

# Branch protection rules
protection_rule = {
    "required_status_checks": None,
    "enforce_admins": True,
    "required_pull_request_reviews": {
        "required_approving_review_count": 1
    },
    "restrictions": None
}

# Set branch protection for the main branch
response = requests.put(
    f'https://api.github.com/repos/{REPO}/branches/main/protection',
    headers=headers,
    json=protection_rule
)

if response.status_code == 200:
    print("Branch protection rules applied successfully.")
else:
    print(f"Error: {response.status_code} - {response.json()}")
