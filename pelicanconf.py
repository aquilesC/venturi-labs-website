AUTHOR = 'Aquiles'
SITENAME = 'Venturi Labs'
SITEURL = 'https://venturi-labs.eu'

DIRECT_TEMPLATES = ['index', 'sitemap', 'resources']
SITEMAP_SAVE_AS = 'sitemap.xml'
RESOURCES_SAVE_AS = 'resources/index.html'

MENUITEMS = (
    ('Resources', '/resources'),
)

PATH = 'content'

# Serve pages at /slug/ instead of /pages/slug.html
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

# Serve articles at /slug/ instead of /slug.html
ARTICLE_URL = '{slug}/'
ARTICLE_SAVE_AS = '{slug}/index.html'
THEME = 'theme/venturi'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ('Pelican', 'https://getpelican.com/'),
    ('Python.org', 'https://www.python.org/'),
    ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
)

# Social widget
SOCIAL = (
    ('You can add links in your config file', '#'),
    ('Another social link', '#'),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True
