// ============== LANGUAGE & CURRENCY SYSTEM (TASK 5) ==============

// Language and currency data with translations
const languages = [
    { 
        code: 'us', 
        name: 'English', 
        flag: '🇺🇸', 
        currency: 'USD', 
        symbol: '$', 
        rate: 0.018,
        translations: {
            // Navigation
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            
            // Hero section
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            
            // Homepage text
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            
            // Shop page
            'shop_description': 'Explore our personalized photo products.',
            
            // Cart page
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            
            // Product detail page
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            
            // Editor page
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            
            // Print options
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            
            // Other pages
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            
            // Modals
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            
            // Footer
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            
            // Reviews
            'customer_reviews': 'Customer Reviews',
            
            // Chat
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            
            // Loading states
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
        code: 'uk', 
        name: 'English', 
        flag: '🇬🇧', 
        currency: 'GBP', 
        symbol: '£', 
        rate: 0.014,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
    code: 'se', 
    name: 'Svenska', 
    flag: '🇸🇪', 
    currency: 'SEK', 
    symbol: 'kr', 
    rate: 0.25,
    translations: {
        // Navigation
        'home': 'Hem',
        'editor': 'Redigerare',
        'shop': 'Butik',
        'info': 'Info',
        'log_in': 'Logga in',
        'register_here': 'Registrera här!',
        'cart': 'Varukorg',
        'philippines': 'Filippinerna',
        
        // Hero section
        'welcome': 'Välkommen till FOTOCENTER PH',
        'tagline': 'Papperskopior för dina digitala foton',
        'start_ordering': 'Börja beställa',
        
        // Homepage text
        'your': 'Dina',
        'memories': 'MINNEN',
        'deserve_more': 'förtjänar mer än bara en skärm.',
        'help_transform': 'Vi hjälper dig att omvandla dina favoritögonblick till:',
        'stunning_cards': '• Fantastiska fotokort för alla tillfällen',
        'personalized_calendars': '• Personliga kalendrar att njuta av hela året',
        'beautiful_canvas': '• Vackra canvas-tavlor för dina väggar',
        'and_more': '• Och mycket mer...',
        'turn_your': 'Förvandla dina',
        'into_art': 'till konst du kan hålla i.',
        'upload_any': '✓ Ladda upp valfritt foto',
        'edit_tools': '✓ Redigera med våra användarvänliga verktyg',
        'choose_six': '✓ Välj bland 6 produkttyper',
        'high_quality': '✓ Få högkvalitativa utskrifter levererade',
        'simple_editor': 'Allt med vår enkla online-redigerare.',
        
        // Shop page
        'shop_description': 'Utforska våra personliga fotoprodukter.',
        
        // Cart page
        'shopping_cart': 'VARUKORG',
        'continue_shopping': 'Fortsätt handla',
        'all': 'ALLA',
        'printing': 'Tryckning',
        'to_ship': 'Att skicka',
        'completed': 'Slutförd',
        'cancel_return': 'Avbryt/Returnera',
        'select_all': 'Välj alla',
        'items': 'artiklar',
        'delete_selected': 'Ta bort valda',
        'total': 'Totalt',
        'selected_items': 'valda artiklar',
        'complete_order': 'SLUTFÖR ORDER',
        
        // Product detail page
        'back_to_home': 'Tillbaka till startsidan',
        'available_sizes': 'Tillgängliga storlekar:',
        'paper_types': 'Papperstyper:',
        'open_in_editor': 'ÖPPNA I REDIGERARE',
        
        // Editor page
        'photo_upload_editing': 'Fotouppladdning & Redigering',
        'upload_description': 'Ladda upp dina foton och anpassa dem innan du beställer utskrifter.',
        'upload_photos': 'Ladda upp foton',
        'order_prints': 'Beställ utskrifter',
        'click_browse': 'Klicka för att bläddra eller dra och släpp bilder här',
        'file_types': 'Stöder JPG, PNG, GIF upp till 10MB var',
        'uploaded': 'Uppladdade',
        'photos': 'foton',
        'photo_editor': 'FOTOREDIGERARE',
        'products': 'Produkter',
        'none': 'Ingen',
        'select_photo': 'Välj ett foto att redigera ovanifrån',
        'select_photo_start': 'Välj ett foto för att börja redigera',
        'edit_tools': 'Redigeringsverktyg',
        'brightness': 'Ljusstyrka',
        'contrast': 'Kontrast',
        'saturation': 'Mättnad',
        'rotate_flip': 'Rotera & Vänd',
        'rotate_left': '↺ 90°',
        'rotate_right': '↻ 90°',
        'flip_h': '⬌ Vänd H',
        'flip_v': '⬍ Vänd V',
        'filters': 'Filter',
        'grayscale': 'Gråskala',
        'sepia': 'Sepia',
        'vintage': 'Vintage',
        'cool': 'Kall',
        'warm': 'Varm',
        'vivid': 'Levande',
        'noir': 'Noir',
        'lomo': 'Lomo',
        'dreamy': 'Drömsk',
        'advanced_tools': 'Avancerade verktyg',
        'crop': 'Beskär',
        'add_text': 'Lägg till text',
        'red_eye': 'Röda ögon',
        'auto_enhance': 'Auto-förbättra',
        'undo': 'Ångra',
        'redo': 'Gör om',
        'reset_all': 'Återställ alla',
        'save_edits': 'Spara redigeringar',
        'download': 'Ladda ner',
        
        // Print options
        'print_options': 'Utskriftsalternativ',
        'paper_type': 'Papperstyp',
        'standard': 'Standard',
        'glossy': 'Glansig',
        'matte': 'Matt',
        'premium': 'Premium',
        'size_mode': 'Storleksläge',
        'fill': 'Fyll',
        'fit': 'Anpassa',
        'size': 'Storlek',
        'size_unit': 'Storleksenhet:',
        'inches_default': 'Tum (standard)',
        'price_by_area': 'Pris beräknat per yta',
        'quantity': 'Antal',
        'base_price': 'Grundpris:',
        'paper_type_price': 'Papperstyp pris:',
        'quantity_price': 'Antalspris:',
        'add_to_cart': 'Lägg i varukorg',
        
        // Other pages
        'photo_cards': 'Fotokort',
        'cards_description': 'Skapa personliga gratulationskort för alla tillfällen.',
        'custom_calendars': 'Personliga kalendrar',
        'calendars_description': 'Skapa personliga kalendrar med dina foton.',
        'photo_book': 'Fotobok',
        'photobook_description': 'Släpp loss din kreativitet med våra fotoböcker.',
        'photo_gifts': 'Fotopresenter',
        'gifts_description': 'Canvas, musmattor och andra fotopresenter.',
        'canvas': 'Canvas',
        'canvas_description': 'Ditt favoritfoto monterat på canvas.',
        'fotocenter_branch': 'FOTOCENTER FILIAL',
        'address': 'Adress:',
        'address_value': 'St. Agatha Homes, Malolos, Bulacan',
        'phone': 'Telefon:',
        'phone_value': '(+63) 929 725 2291',
        'email': 'E-post:',
        
        // Modals
        'your_cart': 'Din varukorg',
        'clear': 'Rensa',
        'checkout': 'Till kassan',
        'welcome_back': 'Välkommen tillbaka',
        'sign_in_subtitle': 'Logga in på ditt FOTOCENTER-konto',
        'email_address': 'E-postadress',
        'password': 'Lösenord',
        'remember_me': 'Kom ihåg mig',
        'forgot': 'Glömt?',
        'sign_in': 'Logga in',
        'or': 'eller',
        'sign_in_google': 'Logga in med Google',
        'sign_in_facebook': 'Logga in med Facebook',
        'no_account': 'Har du inget konto?',
        'create_one': 'Skapa ett',
        'create_account': 'Skapa konto',
        'join_today': 'Gå med i FOTOCENTER idag',
        'full_name': 'Fullständigt namn',
        'confirm_password': 'Bekräfta lösenord',
        'sign_up_google': 'Registrera dig med Google',
        'have_account': 'Har du redan ett konto?',
        'photo_added': 'Foto tillagt i varukorgen!',
        'photo_added_message': 'Ditt redigerade foto har lagts till i din varukorg.',
        'continue_editing': 'Fortsätt redigera',
        'view_cart': 'Visa varukorg',
        'your_shopping_cart': 'Din varukorg',
        'view_cart_page': 'Visa varukorgssidan',
        'order_submitted': 'Order skickad!',
        'ok': 'OK',
        
        // Footer
        'menu': 'Meny',
        'terms': 'Villkor',
        'terms_of_use': 'Användarvillkor',
        'payment_terms': 'Betalningsvillkor',
        'cookie_details': 'Cookie-information',
        'copyright': '© Drivs av FOTOCENTER. Genom att fortsätta använda vår webbplats antar vi att du godkänner användningen av cookies.',
        
        // Reviews
        'customer_reviews': 'Kundrecensioner',
        
        // Chat
        'support': 'FOTOCENTER Support',
        'pricing': 'Priser',
        'delivery': 'Leverans',
        'upload': 'Uppladdning',
        'quality': 'Kvalitet',
        'editing': 'Redigering',
        'payment': 'Betalning',
        'sizes': 'Storlekar',
        'refund': 'Återbetalning',
        'send': 'Skicka',
        
        // Loading states
        'loading_cart': 'Laddar varukorg...',
        'back': 'Tillbaka'
    }
},
    { 
        code: 'no', 
        name: 'Norsk', 
        flag: '🇳🇴', 
        currency: 'NOK', 
        symbol: 'kr', 
        rate: 0.26,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
        code: 'dk', 
        name: 'Dansk', 
        flag: '🇩🇰', 
        currency: 'DKK', 
        symbol: 'kr', 
        rate: 0.23,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
        code: 'fi', 
        name: 'Suomi', 
        flag: '🇫🇮', 
        currency: 'EUR', 
        symbol: '€', 
        rate: 0.018,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
        code: 'de', 
        name: 'Deutsch', 
        flag: '🇩🇪', 
        currency: 'EUR', 
        symbol: '€', 
        rate: 0.018,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
        code: 'nl', 
        name: 'Nederlands', 
        flag: '🇳🇱', 
        currency: 'EUR', 
        symbol: '€', 
        rate: 0.018,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
        code: 'fr', 
        name: 'Français', 
        flag: '🇫🇷', 
        currency: 'EUR', 
        symbol: '€', 
        rate: 0.018,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
        code: 'it', 
        name: 'Italiano', 
        flag: '🇮🇹', 
        currency: 'EUR', 
        symbol: '€', 
        rate: 0.018,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    },
    { 
        code: 'gr', 
        name: 'Ελληνικά', 
        flag: '🇬🇷', 
        currency: 'EUR', 
        symbol: '€', 
        rate: 0.018,
        translations: {
            'home': 'Home',
            'editor': 'Editor',
            'shop': 'Shop',
            'info': 'Info',
            'log_in': 'Log in',
            'register_here': 'Register here!',
            'cart': 'Cart',
            'philippines': 'Philippines',
            'welcome': 'Welcome to FOTOCENTER PH',
            'tagline': 'Paper copies for your digital photos',
            'start_ordering': 'Start Ordering',
            'your': 'Your',
            'memories': 'MEMORIES',
            'deserve_more': 'deserve more than just a screen.',
            'help_transform': 'We help you transform your favorite digital moments into:',
            'stunning_cards': '• Stunning photo cards for any occasion',
            'personalized_calendars': '• Personalized calendars to cherish all year',
            'beautiful_canvas': '• Beautiful canvas prints for your walls',
            'and_more': '• And more...',
            'turn_your': 'Turn your',
            'into_art': 'into art you can hold.',
            'upload_any': '✓ Upload any photo',
            'edit_tools': '✓ Edit with our easy-to-use tools',
            'choose_six': '✓ Choose from 6 product types',
            'high_quality': '✓ Get high-quality prints delivered',
            'simple_editor': 'All with our simple online editor.',
            'shop_description': 'Explore our personalized photo products.',
            'shopping_cart': 'SHOPPING CART',
            'continue_shopping': 'Continue Shopping',
            'all': 'ALL',
            'printing': 'Printing',
            'to_ship': 'To Ship',
            'completed': 'Completed',
            'cancel_return': 'Cancel/Return',
            'select_all': 'Select All',
            'items': 'items',
            'delete_selected': 'Delete Selected',
            'total': 'Total',
            'selected_items': 'selected items',
            'complete_order': 'COMPLETE ORDER',
            'back_to_home': 'Back to Home',
            'available_sizes': 'Available Sizes:',
            'paper_types': 'Paper Types:',
            'open_in_editor': 'OPEN IN EDITOR',
            'photo_upload_editing': 'Photo Upload & Editing',
            'upload_description': 'Upload your photos and customize them before ordering prints.',
            'upload_photos': 'Upload Photos',
            'order_prints': 'Order Prints',
            'click_browse': 'Click to browse or drag and drop images here',
            'file_types': 'Supports JPG, PNG, GIF up to 10MB each',
            'uploaded': 'Uploaded',
            'photos': 'photos',
            'photo_editor': 'PHOTO EDITOR',
            'products': 'Products',
            'none': 'None',
            'select_photo': 'Select a photo to edit from above',
            'select_photo_start': 'Select a photo to start editing',
            'edit_tools': 'Edit Tools',
            'brightness': 'Brightness',
            'contrast': 'Contrast',
            'saturation': 'Saturation',
            'rotate_flip': 'Rotate & Flip',
            'rotate_left': '↺ 90°',
            'rotate_right': '↻ 90°',
            'flip_h': '⬌ Flip H',
            'flip_v': '⬍ Flip V',
            'filters': 'Filters',
            'grayscale': 'Grayscale',
            'sepia': 'Sepia',
            'vintage': 'Vintage',
            'cool': 'Cool',
            'warm': 'Warm',
            'vivid': 'Vivid',
            'noir': 'Noir',
            'lomo': 'Lomo',
            'dreamy': 'Dreamy',
            'advanced_tools': 'Advanced Tools',
            'crop': 'Crop',
            'add_text': 'Add Text',
            'red_eye': 'Red-Eye',
            'auto_enhance': 'Auto Enhance',
            'undo': 'Undo',
            'redo': 'Redo',
            'reset_all': 'Reset All',
            'save_edits': 'Save Edits',
            'download': 'Download',
            'print_options': 'Print Options',
            'paper_type': 'Paper Type',
            'standard': 'Standard',
            'glossy': 'Glossy',
            'matte': 'Matte',
            'premium': 'Premium',
            'size_mode': 'Size Mode',
            'fill': 'Fill',
            'fit': 'Fit',
            'size': 'Size',
            'size_unit': 'Size Unit:',
            'inches_default': 'Inches (default)',
            'price_by_area': 'Price calculated by area',
            'quantity': 'Quantity',
            'base_price': 'Base Price:',
            'paper_type_price': 'Paper Type Price:',
            'quantity_price': 'Quantity Price:',
            'add_to_cart': 'Add to Cart',
            'photo_cards': 'Photo Cards',
            'cards_description': 'Create personalized greeting cards for every occasion.',
            'custom_calendars': 'Custom Calendars',
            'calendars_description': 'Create personalized calendars with your photos.',
            'photo_book': 'Photo Book',
            'photobook_description': 'Unleash your creativity with our photo books.',
            'photo_gifts': 'Photo Gifts',
            'gifts_description': 'Canvas, mouse pads and other photo gifts.',
            'canvas': 'Canvas',
            'canvas_description': 'Your favorite photo mounted on canvas.',
            'fotocenter_branch': 'FOTOCENTER PH BRANCH',
            'address': 'Address:',
            'address_value': 'St. Agatha Homes, Malolos, Bulacan',
            'phone': 'Phone:',
            'phone_value': '(+63) 929 725 2291',
            'email': 'Email:',
            'your_cart': 'Your Cart',
            'clear': 'Clear',
            'checkout': 'Checkout',
            'welcome_back': 'Welcome Back',
            'sign_in_subtitle': 'Sign in to your FOTOCENTER account',
            'email_address': 'Email Address',
            'password': 'Password',
            'remember_me': 'Remember Me',
            'forgot': 'Forgot?',
            'sign_in': 'Sign In',
            'or': 'or',
            'sign_in_google': 'Sign in with Google',
            'sign_in_facebook': 'Sign in with Facebook',
            'no_account': 'Don\'t have an account?',
            'create_one': 'Create one',
            'create_account': 'Create Account',
            'join_today': 'Join FOTOCENTER today',
            'full_name': 'Full Name',
            'confirm_password': 'Confirm Password',
            'sign_up_google': 'Sign up with Google',
            'have_account': 'Already have an account?',
            'photo_added': 'Photo Added to Cart!',
            'photo_added_message': 'Your edited photo has been successfully added to your shopping cart.',
            'continue_editing': 'Continue Editing',
            'view_cart': 'View Cart',
            'your_shopping_cart': 'Your Shopping Cart',
            'view_cart_page': 'View Cart Page',
            'order_submitted': 'Order Submitted Successfully!',
            'ok': 'OK',
            'menu': 'Menu',
            'terms': 'Terms',
            'terms_of_use': 'Terms of Use',
            'payment_terms': 'Payment Terms',
            'cookie_details': 'Cookie Details',
            'copyright': '© Powered by FOTOCENTER. By continuing to use our website we assume you agree to the use of cookies.',
            'customer_reviews': 'Customer Reviews',
            'support': 'FOTOCENTER Support',
            'pricing': 'Pricing',
            'delivery': 'Delivery',
            'upload': 'Upload',
            'quality': 'Quality',
            'editing': 'Editing',
            'payment': 'Payment',
            'sizes': 'Sizes',
            'refund': 'Refunds',
            'send': 'Send',
            'loading_cart': 'Loading cart...',
            'back': 'Back'
        }
    }
];

// Default language (US English)
let currentLanguage = JSON.parse(localStorage.getItem('selectedLanguage')) || languages[0];

// ============== PRINT OPTIONS CONFIGURATION ==============
const printOptionsConfig = {
    photocards: [
        { value: "4x6", label: "4x6", price: "25.00" },
        { value: "5x7", label: "5x7", price: "35.00" },
        { value: "8x10", label: "8x10", price: "50.00" }
    ],
    calendar: [
        { value: "8x10", label: "8x10", price: "60.00" },
        { value: "12x12", label: "12x12", price: "85.00" },
        { value: "8.5x11", label: "8.5x11", price: "70.00" },
        { value: "11x17", label: "11x17", price: "100.00" }
    ],
    photobook: [
        { value: "8x8", label: "8x8", price: "120.00" },
        { value: "11x8.5", label: "11x8.5", price: "150.00" }
    ],
    canvas: [
        { value: "8x10", label: "8x10", price: "200.00" },
        { value: "16x20", label: "16x20", price: "350.00" }
    ],
    mousepads: [
        { value: "7x9", label: "7x9", price: "45.00" },
        { value: "9x11", label: "9x11", price: "60.00" }
    ],
    doublecards: [
        { value: "5x7", label: "5x7", price: "70.00" },
        { value: "8x10", label: "8x10", price: "95.00" }
    ]
}; 
window.printOptionsConfig = printOptionsConfig;
// ============== LANGUAGE FUNCTIONS ==============

// Initialize language dropdown
function initLanguageDropdown() {
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (!languageBtn || !languageMenu) return;
    
    // Populate menu
    languageMenu.innerHTML = '';
    languages.forEach(lang => {
        const item = document.createElement('div');
        item.className = `language-item ${lang.code === currentLanguage.code ? 'active' : ''}`;
        item.setAttribute('data-language', lang.code);
        item.innerHTML = `
            <span class="flag-icon">${lang.flag}</span>
            <span class="language-name">${lang.name}</span>
            <span class="currency-code">${lang.currency}</span>
            <span class="currency-symbol">${lang.symbol}</span>
        `;
        item.addEventListener('click', () => selectLanguage(lang));
        languageMenu.appendChild(item);
    });
    
    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('open');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('open');
        }
    });
    
    // Update button display
    updateLanguageButton();
}

// Select language
function selectLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', JSON.stringify(lang));
    
    // Update UI
    updateLanguageButton();
    updateAllText();
    updateAllPrices();
    
    // Close dropdown
    document.getElementById('languageDropdown').classList.remove('open');
    
    // Update active state in menu
    document.querySelectorAll('.language-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-language') === lang.code);
    });
}

// Update language button
function updateLanguageButton() {
    const btn = document.getElementById('languageBtn');
    if (!btn) return;
    
    btn.innerHTML = `
        <span class="flag-icon">${currentLanguage.flag}</span>
        <span class="language-name">${currentLanguage.name}</span>
        <span class="currency-code">${currentLanguage.currency}</span>
        <span class="dropdown-arrow">▼</span>
    `;
}

// Update all text on the page based on selected language
function updateAllText() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Check if translations exist and have the key
        if (currentLanguage && currentLanguage.translations && currentLanguage.translations[key]) {
            element.textContent = currentLanguage.translations[key];
        } else {
            console.warn(`Translation missing for key: ${key}`);
        }
    });
}

// Convert PHP to current currency
function convertPrice(phpPrice) {
    return (phpPrice * currentLanguage.rate).toFixed(2);
}

// Get formatted price with symbol
// ============== FORMAT PRICE FUNCTION (USD to Selected Currency) ==============
window.formatPrice = function(usdPrice) {
    // Get current language/currency (default to USD if not set)
    const lang = window.currentLanguage || { 
        symbol: '$', 
        rate: 1, 
        currency: 'USD' 
    };
    
    // Convert USD to target currency
    const convertedPrice = usdPrice * lang.rate;
    
    // Format based on currency
    switch(lang.currency) {
        case 'USD':
            return `$${convertedPrice.toFixed(2)}`;
        case 'EUR':
            return `€${convertedPrice.toFixed(2)}`;
        case 'GBP':
            return `£${convertedPrice.toFixed(2)}`;
        case 'SEK':
        case 'NOK':
        case 'DKK':
            return `${convertedPrice.toFixed(2)} kr`;
        default:
            return `${lang.symbol}${convertedPrice.toFixed(2)}`;
    }
};


// ============== MODIFY EXISTING PRODUCT DATA ==============

// Update productDatabase to use PHP base prices
const productDatabase = {
    photocards: {
        name: 'Photo Cards',
        basePricePHP: 25, // PHP price
        mainImage: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        thumbnails: [
            'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
            'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&flip=1',
            'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&rotate=90'
        ],
        sizes: printOptionsConfig.photocards,
        paperTypes: [
            { name: 'Standard', pricePHP: 0 },
            { name: 'Glossy', pricePHP: 10 },
            { name: 'Matte', pricePHP: 15 },
            { name: 'Premium', pricePHP: 25 }
        ],
        description: 'Create personalized greeting cards for any occasion. Perfect for birthdays, holidays, or just to say thank you. Choose from various sizes and paper types to match your style.',
        icon: '🖼️',
        productType: 'photocards'
    },
    calendar: {
        name: 'Calendar',
        basePricePHP: 60,
        mainImage: 'https://images.pexels.com/photos/4692171/pexels-photo-4692171.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        thumbnails: [
            'https://images.pexels.com/photos/4692171/pexels-photo-4692171.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
            'https://images.pexels.com/photos/4692171/pexels-photo-4692171.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&flip=1',
            'https://images.pexels.com/photos/4692171/pexels-photo-4692171.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&rotate=90'
        ],
        sizes: printOptionsConfig.calendar,
        paperTypes: [
            { name: 'Standard', pricePHP: 0 },
            { name: 'Glossy', pricePHP: 10 },
            { name: 'Matte', pricePHP: 15 },
            { name: 'Premium', pricePHP: 25 }
        ],
        description: 'Create personalized calendars with your favorite photos. Perfect for gifts or home decoration. Choose from desk, wall, or mini calendars to match your style.',
        icon: '📅',
        productType: 'calendar'
    },
    photobook: {
        name: 'Photo Book',
        basePricePHP: 120,
        mainImage: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        thumbnails: [
            'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
            'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&flip=1',
            'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&rotate=90'
        ],
        sizes: printOptionsConfig.photobook,
        paperTypes: [
            { name: 'Standard', pricePHP: 0 },
            { name: 'Glossy', pricePHP: 10 },
            { name: 'Matte', pricePHP: 15 },
            { name: 'Premium', pricePHP: 25 }
        ],
        description: 'Premium hardcover photo books to collect your memories. Perfect for weddings, vacations, or family albums. Choose from various sizes and binding options.',
        icon: '📘',
        productType: 'photobook'
    },
    canvas: {
        name: 'Canvas',
        basePricePHP: 200,
        mainImage: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        thumbnails: [
            'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
            'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&flip=1',
            'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&rotate=90'
        ],
        sizes: printOptionsConfig.canvas,
        paperTypes: [
            { name: 'Standard', pricePHP: 0 },
            { name: 'Glossy', pricePHP: 10 },
            { name: 'Matte', pricePHP: 15 },
            { name: 'Premium', pricePHP: 25 }
        ],
        description: 'Your favorite photo mounted on high-quality canvas. Gallery-wrapped and ready to hang. Perfect for home decor or special gifts.',
        icon: '🖼️',
        productType: 'canvas'
    },
    mousepads: {
        name: 'Mouse Pads',
        basePricePHP: 45,
        mainImage: 'https://images.unsplash.com/photo-1625723044792-44de16ccb5e9?w=800&h=600&fit=crop',
        thumbnails: [
            'https://images.unsplash.com/photo-1625723044792-44de16ccb5e9?w=200&h=200&fit=crop',
            'https://images.unsplash.com/photo-1625723044792-44de16ccb5e9?w=200&h=200&fit=crop&flip=1',
            'https://images.unsplash.com/photo-1625723044792-44de16ccb5e9?w=200&h=200&fit=crop&rotate=90'
        ],
        sizes: printOptionsConfig.mousepads,
        paperTypes: [
            { name: 'Standard', pricePHP: 0 },
            { name: 'Glossy', pricePHP: 10 },
            { name: 'Matte', pricePHP: 15 },
            { name: 'Premium', pricePHP: 25 }
        ],
        description: 'Custom photo mouse pads for your desk. Perfect for office or home use. Non-slip rubber base and smooth surface for optimal mouse control.',
        icon: '🖱️',
        productType: 'mousepads'
    },
    doublecards: {
        name: 'Double Cards',
        basePricePHP: 70,
        mainImage: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        thumbnails: [
            'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
            'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&flip=1',
            'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&rotate=90'
        ],
        sizes: printOptionsConfig.doublecards,
        paperTypes: [
            { name: 'Standard', pricePHP: 0 },
            { name: 'Glossy', pricePHP: 10 },
            { name: 'Matte', pricePHP: 15 },
            { name: 'Premium', pricePHP: 25 }
        ],
        description: 'Elegant folded greeting cards for all special occasions. Perfect for invitations, thank you notes, or holiday greetings. Comes with matching envelopes.',
        icon: '🃏',
        productType: 'doublecards'
    }
};

// ============== MODIFY LOAD PRODUCT DETAILS ==============

function loadProductDetails(productType) {
    const product = productDatabase[productType];
    if (!product) return;
    
    // Set main image
    document.getElementById('productMainImage').src = product.mainImage;
    
    // Set product name
    document.getElementById('productName').textContent = product.name;
    
    // Set product price with currency conversion
    const priceElement = document.getElementById('productPrice');
    priceElement.setAttribute('data-php', product.basePricePHP);
    priceElement.textContent = formatPrice(product.basePricePHP);
    
    // Set description
    document.getElementById('productDescription').textContent = product.description;
    
    // Set icon
    document.getElementById('productIcon').textContent = product.icon;
    
    // Load thumbnails
    const thumbnailsContainer = document.getElementById('productThumbnails');
    thumbnailsContainer.innerHTML = '';
    product.thumbnails.forEach((thumb, index) => {
        const thumbDiv = document.createElement('div');
        thumbDiv.className = `thumbnail-item ${index === 0 ? 'active' : ''}`;
        thumbDiv.innerHTML = `<img src="${thumb}" alt="Variation ${index + 1}">`;
        thumbDiv.addEventListener('click', function() {
            document.getElementById('productMainImage').src = thumb;
            document.querySelectorAll('.thumbnail-item').forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumbDiv);
    });
    
    // Load sizes
    const sizesContainer = document.getElementById('productSizes');
    sizesContainer.innerHTML = '';
    product.sizes.forEach(size => {
        const phpPrice = parseFloat(size.price);
        const sizeDiv = document.createElement('div');
        sizeDiv.className = 'size-item';
        sizeDiv.innerHTML = `<span>${size.label}</span> <span data-php="${phpPrice}">${formatPrice(phpPrice)}</span>`;
        sizesContainer.appendChild(sizeDiv);
    });
    
    // Load paper types
    const paperContainer = document.getElementById('productPaperTypes');
    paperContainer.innerHTML = '';
    product.paperTypes.forEach(paper => {
        const paperDiv = document.createElement('div');
        paperDiv.className = 'paper-item';
        paperDiv.innerHTML = `<span>${paper.name}</span> <span data-php="${paper.pricePHP}">+${formatPrice(paper.pricePHP)}</span>`;
        paperContainer.appendChild(paperDiv);
    });
    
    // Store selected product for editor
    document.getElementById('openEditorBtn').setAttribute('data-product', product.productType);
}

// ============== MODIFY SLIDESHOW ==============

class Slideshow {
    constructor() {
        this.track = document.getElementById('slidesTrack');
        this.dotsContainer = document.getElementById('slideshowDots');
        this.prevBtn = document.getElementById('slideshowPrev');
        this.nextBtn = document.getElementById('slideshowNext');
        this.pauseBtn = document.getElementById('slideshowPause');
        
        this.currentIndex = 0;
        this.totalSlides = 0;
        this.isPaused = false;
        this.interval = null;
        this.autoPlayDelay = 5000; // 5 seconds
        
        this.products = [
            {
                name: 'Photo Cards',
                pricePHP: 25,
                image: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop',
                desc: 'Create personalized greeting cards'
            },
            {
                name: 'Calendar',
                pricePHP: 60,
                image: 'https://images.pexels.com/photos/4692171/pexels-photo-4692171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop',
                desc: 'Make your own custom calendar'
            },
            {
                name: 'Photo Book',
                pricePHP: 120,
                image: 'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop',
                desc: 'Premium hardcover photo books'
            },
            {
                name: 'Canvas',
                pricePHP: 200,
                image: 'https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop',
                desc: 'Your favorite photo on canvas'
            },
            {
                name: 'Mouse Pads',
                pricePHP: 45,
                image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb5e9?w=1260&h=750&fit=crop',
                desc: 'Custom photo mouse pads'
            },
            {
                name: 'Double Cards',
                pricePHP: 70,
                image: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop',
                desc: 'Elegant folded greeting cards'
            }
        ];
        this.init();
    }
    
    init() {
        if (!this.track) {
            console.error('Slideshow track not found');
            return;
        }
        
        this.totalSlides = this.products.length;
        this.renderSlides();
        this.createDots();
        this.setupEventListeners();
        this.startAutoPlay();
        this.updateSlidePosition(0);
    }
    
    renderSlides() {
        this.track.innerHTML = '';
        this.track.style.width = `${this.totalSlides * 100}%`;
        
        this.products.forEach(product => {
            const slide = document.createElement('div');
            slide.className = 'slide-card';
            slide.style.width = `${100 / this.totalSlides}%`;
            slide.innerHTML = `
                <div class="slide-image">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         loading="lazy"
                         onerror="this.src='https://via.placeholder.com/1200x800?text=${product.name}'">
                </div>
                <div class="slide-info">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <div class="slide-price" data-php="${product.pricePHP}">For only ${formatPrice(product.pricePHP)} !!!</div>
                </div>
            `;
            this.track.appendChild(slide);
        });
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    setupEventListeners() {
        if (this.prevBtn) {
            const newPrev = this.prevBtn.cloneNode(true);
            this.prevBtn.parentNode.replaceChild(newPrev, this.prevBtn);
            this.prevBtn = newPrev;
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            const newNext = this.nextBtn.cloneNode(true);
            this.nextBtn.parentNode.replaceChild(newNext, this.nextBtn);
            this.nextBtn = newNext;
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        if (this.pauseBtn) {
            const newPause = this.pauseBtn.cloneNode(true);
            this.pauseBtn.parentNode.replaceChild(newPause, this.pauseBtn);
            this.pauseBtn = newPause;
            this.pauseBtn.addEventListener('click', () => this.togglePause());
        }
        
        window.addEventListener('resize', () => {
            this.updateSlidePosition(this.currentIndex);
        });
    }
    
    updateSlidePosition(index) {
        if (index < 0) index = this.totalSlides - 1;
        if (index >= this.totalSlides) index = 0;
        
        const translateX = -(index * 100 / this.totalSlides) + '%';
        this.track.style.transform = `translateX(${translateX})`;
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        this.currentIndex = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateSlidePosition(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlidePosition(prevIndex);
    }
    
    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.updateSlidePosition(index);
        }
    }
    
    togglePause() {
        this.isPaused = !this.isPaused;
        if (this.pauseBtn) {
            this.pauseBtn.innerHTML = this.isPaused ? '▶️ Play' : '⏸️ Pause';
        }
        
        if (this.isPaused) {
            this.stopAutoPlay();
        } else {
            this.startAutoPlay();
        }
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.interval = setInterval(() => {
            if (!this.isPaused) {
                this.nextSlide();
            }
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}

// ============== INITIALIZATION ==============

document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functions
    if (typeof displayHomeProducts === 'function') displayHomeProducts();
    if (typeof setupPhotoEditor === 'function') setupPhotoEditor();
    if (typeof setupNavHighlight === 'function') setupNavHighlight();
    if (typeof setupDragAndDrop === 'function') setupDragAndDrop();
    if (typeof setupEventListeners === 'function') setupEventListeners();
    if (typeof initPhotoMode === 'function') initPhotoMode();
    if (typeof updateLoginStatus === 'function') updateLoginStatus();
    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof setupFaqScroll === 'function') setupFaqScroll();
    if (typeof setupChatKeyboard === 'function') setupChatKeyboard();
    if (typeof setupDropdownMenu === 'function') setupDropdownMenu();
    
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.onclick = function(e) {
            e.preventDefault();
            navigateTo('cart-page');
        };
    }
    
    if (typeof renderShopProducts === 'function') renderShopProducts();
    if (typeof renderReviews === 'function') renderReviews();
    if (typeof updateCartBadgeOnLoad === 'function') updateCartBadgeOnLoad();
    if (typeof loadChatHistory === 'function') loadChatHistory();
    if (typeof updateUndoRedoButtons === 'function') updateUndoRedoButtons();
    
    setTimeout(() => {
        if (typeof selectProduct === 'function') selectProduct('photocards');
    }, 500);
    
    if (typeof initPrintOptions === 'function') initPrintOptions();
    if (typeof initializeGoogleApi === 'function') initializeGoogleApi();
    if (typeof initCartHover === 'function') initCartHover();
    if (typeof initSelectAll === 'function') initSelectAll();
    
    const deleteBtn = document.getElementById('deleteSelectedBtn');
    if (deleteBtn) {
        deleteBtn.onclick = null;
        deleteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🗑️ Delete Selected button clicked');
            if (typeof deleteSelectedItems === 'function') deleteSelectedItems();
        });
    }
    
    // Initialize language system
    initLanguageDropdown();
    
    // Update text and prices
    setTimeout(() => {
        updateAllText();
        updateAllPrices();
    }, 200);
    
    // Initialize slideshow
    setTimeout(() => {
        new Slideshow();
    }, 100);
    
    // Initialize hamburger menu
    if (typeof setupHamburgerMenu === 'function') setupHamburgerMenu();
    
    // Make slides clickable
    setTimeout(() => {
        if (typeof makeSlidesClickable === 'function') makeSlidesClickable();
    }, 1000);
});

// ============== KEEP ALL YOUR EXISTING FUNCTIONS BELOW ==============
// Copy and paste all your existing functions here:
// - Sample products data
// - Product icons mapping
// - Calendar products data
// - Print options configuration
// - Unit conversion functions
// - Cart management functions
// - Photo editor functions
// - Crop tool functions
// - Google Drive functions
// - etc.

// [PASTE ALL YOUR EXISTING CODE HERE]

// Make functions globally available

// Sample products data
const products = [
    { id: 1, name: "Photo Cards", price: "₱600", image: "https://i5.walmartimages.com/seo/48-Pack-Photo-Frame-Cards-with-Envelopes-Notecards-for-4x6-Picture-Insert-Ivory_5339c47e-9e2e-4d17-bbcc-46da7d0288fb.88480b050f2d7e488cd5a07e5e90cfb5.jpeg", description: "Create personalized greeting cards with your best photos" },
    { id: 2, name: "Calendar", price: "₱900", image: "https://th.bing.com/th/id/OIP.YCkmc4EOofxjfXtluhXq-gHaFj?w=284&h=213&c=7&r=0&o=7&pid=1.7&rm=3", description: "Make your own calendar with your favorite photos" },
    { id: 3, name: "Photo Book", price: "₱1,500", image: "https://kroma.co.nz/cdn/shop/products/Classic_Hard_Cover_Photo_Book_Premium.jpg?v=1746043639&width=940", description: "Premium hardcover photo books to collect your memories" },
    { id: 4, name: "Canvas", price: "₱2,400", image: "https://www.printique.com/wp-content/uploads/2019/08/1.jpg", description: "Your favorite photo mounted on canvas" },
    { id: 5, name: "Mouse Pads", price: "₱480", image: "https://th.bing.com/th/id/OIP.3qkIBo_qp7kxxk0SVA2ntwHaEI?w=313&h=180&c=7&r=0&o=7&pid=1.7&rm=3", description: "Display your favorite photo at the office with a mouse pad" },
    { id: 6, name: "Double Cards", price: "₱720", image: "https://framkallning.fotocenter.se/templates2/categories/FOLDEDCARDS/mobile_image.png", description: "Elegant greetings for all special occasions" },
];

// Product icons mapping
const productIcons = {
    'photocards': '🖼️',
    'calendar': '📅',
    'photobook': '📘',
    'canvas': '🖼️',
    'mousepads': '🖱️',
    'doublecards': '🃏'
};

const productDisplayNames = {
    'photocards': 'Photo Cards',
    'calendar': 'Calendar',
    'photobook': 'Photo Book',
    'canvas': 'Canvas',
    'mousepads': 'Mouse Pads',
    'doublecards': 'Double Cards'
};

// ============== CALENDAR PRODUCTS DATA ==============
const calendarProducts = [
    // Desk Calendars (3 samples)
    {
        id: 101,
        type: 'desk',
        name: "Classic Wooden Desk Calendar",
        price: "₱ 850.00",
        image: "https://images.unsplash.com/photo-1585241645928-1f7aeb8bb6c7?w=400&h=300&fit=crop",
        description: "Elegant wooden base with monthly tear-off pages",
        features: ["Wooden Stand", "Tear-off Pages", "8x10 inches"],
        badge: "Best Seller"
    },
    {
        id: 102,
        type: 'desk',
        name: "Modern Acrylic Desk Calendar",
        price: "₱ 950.00",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        description: "Sleek acrylic stand with minimalist design",
        features: ["Acrylic Stand", "Modern Design", "12x12 inches"],
        badge: "Modern"
    },
    {
        id: 103,
        type: 'desk',
        name: "Magnetic Cube Calendar",
        price: "₱ 750.00",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w-400&h=300&fit=crop",
        description: "Rotating cube design with monthly magnets",
        features: ["Magnetic Cubes", "Rotating Design", "Compact Size"],
        badge: "Interactive"
    },

    // Wall Calendars (3 samples)
    {
        id: 104,
        type: 'wall',
        name: "Landscape Wall Calendar",
        price: "₱ 650.00",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        description: "Beautiful nature photography for each month",
        features: ["12 Landscape Photos", "Spiral Bound", "11x17 inches"],
        badge: "Nature"
    },
    {
        id: 105,
        type: 'wall',
        name: "Family Photo Wall Calendar",
        price: "₱ 700.00",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=300&fit=crop",
        description: "Perfect for displaying family memories all year",
        features: ["Custom Photos", "Family Themed", "12x12 inches"],
        badge: "Family"
    },
    {
        id: 106,
        type: 'wall',
        name: "Art Illustration Calendar",
        price: "₱ 800.00",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
        description: "Unique artwork for each month by local artists",
        features: ["Original Art", "Premium Paper", "8.5x11 inches"],
        badge: "Artistic"
    },

    // Mini Calendars (3 samples)
    {
        id: 107,
        type: 'mini',
        name: "Magnetic Fridge Calendar",
        price: "₱ 350.00",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        description: "Small magnetic calendar perfect for your refrigerator",
        features: ["Magnetic Back", "Monthly View", "5x7 inches"],
        badge: "Practical"
    },
    {
        id: 108,
        type: 'mini',
        name: "Credit Card Pocket Calendar",
        price: "₱ 250.00",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
        description: "Ultra-thin calendar that fits in your wallet",
        features: ["Credit Card Size", "12 Months", "Plastic Coated"],
        badge: "Portable"
    },
    {
        id: 109,
        type: 'mini',
        name: "Sticky Note Calendar",
        price: "₱ 450.00",
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=300&fit=crop",
        description: "Monthly sticky notes you can write on",
        features: ["Writeable Surface", "12 Month Pads", "Desktop Design"],
        badge: "Functional"
    },

    // Photo Calendars (3 samples)
    {
        id: 110,
        type: 'photo',
        name: "12-Photo Custom Calendar",
        price: "₱ 900.00",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
        description: "One special photo for each month of the year",
        features: ["12 Custom Photos", "Premium Glossy", "Wire-O Bound"],
        badge: "Personalized"
    },
    {
        id: 111,
        type: 'photo',
        name: "Photo Collage Calendar",
        price: "₱ 1,100.00",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        description: "Multiple photos per month in beautiful layouts",
        features: ["Collage Layouts", "Hard Cover", "12x12 inches"],
        badge: "Deluxe"
    },
    {
        id: 112,
        type: 'photo',
        name: "Baby's 1st Year Calendar",
        price: "₱ 1,200.00",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
        description: "Special calendar to track baby's milestones",
        features: ["Baby Themed", "Milestone Stickers", "Premium Binding"],
        badge: "Baby"
    }
];


// ============== TEMPLATE CONFIGURATION ==============
let currentProduct = 'photocards'; // Default product
window.currentProduct = currentProduct;  // ← ADD THIS LINE
let templateImage = null;
const templates = {
    calendar: null,
    photocards: null,
    photobook: null,
    canvas: null,
    mousepads: null,
    doublecards: null
};

// ============== UNIT CONVERSION ==============
let currentUnit = 'inches'; // Default unit (always inches first)

// Conversion functions
function convertSize(sizeInInches, targetUnit) {
    if (!sizeInInches) return '';
    
    // Parse the size string (e.g., "4x6")
    const parts = sizeInInches.split('x');
    if (parts.length !== 2) return sizeInInches;
    
    const width = parseFloat(parts[0]);
    const height = parseFloat(parts[1]);
    
    if (isNaN(width) || isNaN(height)) return sizeInInches;
    
    switch(targetUnit) {
        case 'cm':
            return `${(width * 2.54).toFixed(1)}x${(height * 2.54).toFixed(1)}`;
        case 'mm':
            return `${Math.round(width * 25.4)}x${Math.round(height * 25.4)}`;
        case 'inches':
        default:
            return sizeInInches;
    }
}

function getUnitSymbol(unit) {
    switch(unit) {
        case 'cm': return 'cm';
        case 'mm': return 'mm';
        default: return '"';
    }
}

// Update unit display
function updateUnitDisplay() {
    const container = document.getElementById('sizeOptionsContainer');
    if (!container) return;
    
    const sizeLabels = container.querySelectorAll('.size-label');
    const sizePriceSpans = container.querySelectorAll('.size-price');
    
    // Get all size values from the radio inputs
    const radioInputs = container.querySelectorAll('input[name="advancedPrintSize"]');
    
    radioInputs.forEach((radio, index) => {
        if (radio.value === 'custom') return;
        
        const sizeValue = radio.value;
        const sizeLabel = sizeLabels[index];
        const sizePrice = sizePriceSpans[index];
        
        if (sizeLabel) {
            // Main label stays in inches
            sizeLabel.innerHTML = sizeValue + '"';
            
            // Add converted size below if unit is not inches
            if (currentUnit !== 'inches') {
                const convertedSize = convertSize(sizeValue, currentUnit);
                const unitSymbol = getUnitSymbol(currentUnit);
                
                // Check if converted size already exists
                let convertedSpan = sizeLabel.parentElement.querySelector('.converted-size');
                if (!convertedSpan) {
                    convertedSpan = document.createElement('span');
                    convertedSpan.className = 'converted-size';
                    convertedSpan.style.display = 'block';
                    convertedSpan.style.fontSize = '0.7rem';
                    convertedSpan.style.color = 'var(--text-muted)';
                    sizeLabel.parentElement.appendChild(convertedSpan);
                }
                convertedSpan.textContent = `${convertedSize}${unitSymbol}`;
            } else {
                // Remove converted size if inches is selected
                const convertedSpan = sizeLabel.parentElement.querySelector('.converted-size');
                if (convertedSpan) {
                    convertedSpan.remove();
                }
            }
        }
    });
    
    // Update custom size inputs
    updateCustomSizeUnit();
}

// Update custom size inputs based on selected unit
function updateCustomSizeUnit() {
    const widthInput = document.getElementById('customWidth');
    const heightInput = document.getElementById('customHeight');
    const unitSelect = document.getElementById('customUnit');
    
    if (!widthInput || !heightInput || !unitSelect) return;
    
    // Store current values in inches for conversion
    const currentWidthInInches = parseFloat(widthInput.getAttribute('data-inches') || widthInput.value);
    const currentHeightInInches = parseFloat(heightInput.getAttribute('data-inches') || heightInput.value);
    
    if (currentUnit === 'inches') {
        // Show inches
        widthInput.value = currentWidthInInches;
        heightInput.value = currentHeightInInches;
        unitSelect.value = 'inches';
    } else if (currentUnit === 'cm') {
        // Convert to cm
        widthInput.value = (currentWidthInInches * 2.54).toFixed(1);
        heightInput.value = (currentHeightInInches * 2.54).toFixed(1);
        unitSelect.value = 'cm';
    } else if (currentUnit === 'mm') {
        // Convert to mm
        widthInput.value = Math.round(currentWidthInInches * 25.4);
        heightInput.value = Math.round(currentHeightInInches * 25.4);
        unitSelect.value = 'cm'; // Keep as cm in select but values are in mm
    }
    
    // Store inches value for future conversions
    widthInput.setAttribute('data-inches', currentWidthInInches);
    heightInput.setAttribute('data-inches', currentHeightInInches);
}

// Handle unit change
function changeUnit(unit) {
    currentUnit = unit;
    updateUnitDisplay();
    calculatePrice(); // Recalculate price if needed
}

function getEventClient(e) {
    if (e.touches && e.touches[0]) return e.touches[0];
    return e;
}

// Initialize navigation highlight and attach handlers
function setupNavHighlight() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            const onclick = this.getAttribute('onclick') || '';
            const m = onclick.match(/'([^']+)'/);
            if (m && m[1]) {
                updateNavHighlight(m[1]);
            }
        });
    });

    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id) {
        updateNavHighlight(activePage.id);
    } else {
        updateNavHighlight('home');
    }
}

// Enhanced Shopping Cart System
let shoppingCart = JSON.parse(localStorage.getItem('fotocenterCart')) || [];
let undoStack = [];
let redoStack = [];

// Photo Editor Variables
let uploadedImages = [];
let currentImageIndex = -1;
let originalImages = [];
let canvas = null;
let ctx = null;
let currentFilter = 'none';

// Calendar Variables
let calendarImages = [];
let calendarCurrentImageIndex = -1;

// Image adjustments
let adjustments = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    rotation: 0,
    flipHorizontal: false,
    flipVertical: false
};

// ============== CROP TOOL ==============
const cropTool = {
    active: false,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    minSize: 10,
    startX: 0,
    startY: 0,
    startCropX: 0,
    startCropY: 0,
    startCropWidth: 0,
    startCropHeight: 0,
    resizing: false,
    moving: false,
    handle: null,
    imageX: 0,
    imageY: 0,
    imageWidth: 0,
    imageHeight: 0
};

// Enhanced Photo Editor Features
const editorFeatures = {
    filters: {
        none: '',
        grayscale: 'grayscale(100%)',
        sepia: 'sepia(100%)',
        vintage: 'sepia(80%) contrast(120%) brightness(90%)',
        cool: 'hue-rotate(180deg) saturate(120%)',
        warm: 'hue-rotate(-30deg) saturate(120%)',
        vivid: 'saturate(150%) contrast(120%)',
        noir: 'grayscale(100%) contrast(150%)',
        lomo: 'contrast(120%) saturate(120%) brightness(110%)',
        dreamy: 'contrast(90%) brightness(110%) saturate(150%)'
    },

    textOverlay: {
        active: false,
        text: 'Add Text',
        font: 'Arial',
        size: 20,
        color: '#ffffff',
        x: 50,
        y: 50
    }
};

// AI Chat Widget with intelligent responses
const chatAI = {
    responses: {
        greeting: ["Hello! 👋 How can I help you with your photo printing needs today?", "Hi there! Welcome to FOTOCENTER. What can I assist you with?"],
        pricing: ["Our photo prints start at ₱25 for 4x6 prints. Cards range from ₱150-₱350. Would you like specific pricing for any product?", "Prices vary by product: Photos (₱25-₱50), Cards (₱150-₱350), Calendars (₱900), Photo Books (₱1500+). Need details?"],
        delivery: ["Delivery takes 3-5 business days in Metro Manila, 5-7 days for provincial areas. Express delivery (+₱200) is available.", "Standard delivery: 3-5 days. We offer express options for faster service."],
        quality: ["We use professional-grade photo paper and printers for excellent quality. All prints come with a satisfaction guarantee!", "Our prints are made with archival-quality materials to ensure your memories last a lifetime."],
        upload: ["You can upload JPG, PNG, or GIF files up to 10MB each. Just drag & drop or click the upload area!", "Supported formats: JPG, PNG, GIF. Max 10MB per file. Need help with uploading?"],
        editing: ["Try our photo editor! You can adjust brightness, contrast, add filters, crop, and more before printing.", "Edit your photos with our tools - adjust colors, add filters, crop, or add text overlays."],
        sizes: ["We offer 4x6, 5x7, and 8x10 inch prints. Cards come in 5x7, 8x10, and folded formats.", "Print sizes: 4x6 (₱25), 5x7 (₱35), 8x10 (₱50). Card sizes vary."],
        refund: ["We offer refunds within 7 days if prints are damaged or incorrect. Contact support with order details.", "Refund policy: 7-day window for damaged/incorrect items. Contact us for assistance."],
        payment: ["We accept GCash, Maya, credit/debit cards (Visa/Mastercard), and bank transfers.", "Payment methods: GCash, Maya, cards, and bank transfers."],
        default: ["I understand you're asking about that. For detailed assistance, please contact us at (+63) 929 725 2291.", "That's a great question! Let me connect you with a human agent for better assistance."]
    },

    getResponse: function (query) {
        query = query.toLowerCase();

        if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
            return this.getRandomResponse('greeting');
        } else if (query.includes('price') || query.includes('cost') || query.includes('how much')) {
            return this.getRandomResponse('pricing');
        } else if (query.includes('deliver') || query.includes('ship') || query.includes('time')) {
            return this.getRandomResponse('delivery');
        } else if (query.includes('quality') || query.includes('good') || query.includes('best')) {
            return this.getRandomResponse('quality');
        } else if (query.includes('upload') || query.includes('file') || query.includes('format')) {
            return this.getRandomResponse('upload');
        } else if (query.includes('edit') || query.includes('filter') || query.includes('crop')) {
            return this.getRandomResponse('editing');
        } else if (query.includes('size') || query.includes('dimension')) {
            return this.getRandomResponse('sizes');
        } else if (query.includes('refund') || query.includes('return') || query.includes('exchange')) {
            return this.getRandomResponse('refund');
        } else if (query.includes('payment') || query.includes('pay') || query.includes('card')) {
            return this.getRandomResponse('payment');
        } else {
            return this.responses.default[Math.floor(Math.random() * this.responses.default.length)];
        }
    },

    getRandomResponse: function (type) {
        const responses = this.responses[type];
        return responses[Math.floor(Math.random() * responses.length)];
    }
};

// ============== ENTER KEY SUPPORT FOR CHAT ==============
function setupChatKeyboard() {
    const chatInput = document.getElementById('chatInput');

    if (chatInput) {
        chatInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
            }
        });

        chatInput.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.key === 'Enter') {
                if (!event.shiftKey) {
                    event.preventDefault();
                    setTimeout(() => {
                        sendMessage();
                    }, 10);
                }
            }
        });
    }
}

// ============== SEND MESSAGE FUNCTION ==============
function sendMessage() {
    const input = document.getElementById('chatInput');

    if (!input) return;

    const messageText = input.value.trim();

    if (!messageText) {
        return;
    }

    input.value = '';

    addMessage(messageText, 'user');
    if (window.socket && window.socket.connected) {
        try {
            window.socket.emit('message', { sender: 'user', text: messageText, time: new Date().toLocaleTimeString(), user: localStorage.getItem('userName') || 'Guest' });
        } catch (e) {
            console.warn('Socket emit failed', e);
        }
    }

    setTimeout(() => {
        const response = chatAI.getResponse(messageText);
        addMessage(response, 'bot');

        if (window.socket && window.socket.connected) {
            try {
                window.socket.emit('message', { sender: 'bot', text: response, time: new Date().toLocaleTimeString() });
            } catch (e) {
                // ignore
            }
        }
    }, 1000);

    setTimeout(() => {
        if (input) {
            input.focus();
        }
    }, 50);
}

// ============== ADD MESSAGE FUNCTION ==============
function addMessage(text, sender) {
    const messages = document.getElementById('chatMessages');
    if (!messages) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;

    const messageContent = document.createElement('div');
    const time = new Date().toLocaleTimeString();
    messageContent.innerHTML = `<p>${text}</p><div class="msg-time">${time}</div>`;
    messageDiv.appendChild(messageContent);

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
    persistChatMessage({ sender, text, time });
}

function persistChatMessage(msg) {
    try {
        const key = 'fotocenterChatHistory';
        const hist = JSON.parse(localStorage.getItem(key)) || [];
        hist.push(msg);
        if (hist.length > 200) hist.shift();
        localStorage.setItem(key, JSON.stringify(hist));
    } catch (e) {
        console.warn('Failed to persist chat message', e);
    }
}

function loadChatHistory() {
    try {
        const key = 'fotocenterChatHistory';
        const hist = JSON.parse(localStorage.getItem(key)) || [];
        const messages = document.getElementById('chatMessages');
        if (!messages) return;
        messages.innerHTML = '';
        hist.forEach(m => {
            const div = document.createElement('div');
            div.className = `chat-message ${m.sender}-message`;
            const content = document.createElement('div');
            content.innerHTML = `<p>${m.text}</p><div class="msg-time">${m.time}</div>`;
            div.appendChild(content);
            messages.appendChild(div);
        });
        messages.scrollTop = messages.scrollHeight;
    } catch (e) {
        console.warn('Failed to load chat history', e);
    }
}

// Cart management functions
function updateCartStorage() {
    localStorage.setItem('fotocenterCart', JSON.stringify(shoppingCart));
}

function addToCart(item) {
    if (!item.sizeMode) {
        item.sizeMode = 'fill';
    }
    
    if (item.selected === undefined) {
        item.selected = true;
    }
    
    const existingItemIndex = shoppingCart.findIndex(cartItem =>
        cartItem.id === item.id &&
        cartItem.type === item.type &&
        cartItem.size === item.size &&
        cartItem.sizeMode === item.sizeMode &&
        cartItem.paperType === item.paperType
    );

    if (existingItemIndex > -1) {
        shoppingCart[existingItemIndex].quantity += item.quantity || 1;
    } else {
        item.addedAt = new Date().toISOString();
        shoppingCart.push(item);
    }

    updateCartStorage();
    updateCartUI();
    showSuccessModal();
    updateCartHover();

    return item;
}

function updateCartUI() {
    const cartBtn = document.querySelector('.cart-btn');
    if (!cartBtn) return;

    const total = calculateCartTotal();
    const itemCount = shoppingCart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    cartBtn.innerHTML = `🛒 Cart <span id="cartCount" class="cart-badge">${itemCount}</span>`;
    const cartCountBadge = document.getElementById('cartCount');
    if (cartCountBadge) cartCountBadge.textContent = itemCount;
}

function calculateCartTotal() {
    return shoppingCart.reduce((total, item) => {
        const price = parseFloat(item.price.toString().replace('₱', '').replace(',', '')) || 0;
        return total + (price * (item.quantity || 1));
    }, 0);
}

function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCartStorage();
    updateCartUI();
    updateCartHover();
    if (document.getElementById('cart-page')?.classList.contains('active')) {
        renderCartPage();
    }
}

function clearCart() {
    shoppingCart = [];
    updateCartStorage();
    updateCartUI();
    updateCartHover();
}

function viewCart() {
    closeModal();
    navigateTo('cart-page');
}

function updateCartItemQuantity(index, change) {
    const item = shoppingCart[index];
    const newQuantity = (item.quantity || 1) + change;

    if (newQuantity < 1) {
        removeFromCart(index);
    } else {
        item.quantity = newQuantity;
        updateCartStorage();
        updateCartUI();
        updateCartHover();
        if (document.getElementById('cart-page')?.classList.contains('active')) {
            renderCartPage();
        }
    }
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'none';
    }
}

function proceedToCheckout() {
    if (shoppingCart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        alert('Please log in to proceed to checkout.');
        navigateTo('login');
        closeCartModal();
        return;
    }

    navigateTo('cart-page');
    closeCartModal();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    displayHomeProducts();
    setupPhotoEditor();
    setupNavHighlight();
    setupDragAndDrop();
    setupEventListeners();
    initPhotoMode();
    updateLoginStatus();
    updateCartUI();
    setupFaqScroll();
    setupChatKeyboard();
    setupDropdownMenu();

    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.onclick = function(e) {
            e.preventDefault();
            navigateTo('cart-page');
        };
    }

    renderShopProducts();
    renderReviews();
    updateCartBadgeOnLoad();
    loadChatHistory();
    updateUndoRedoButtons();

    setTimeout(() => {
        selectProduct('photocards');
    }, 500);
    
    // Initialize print options
    initPrintOptions();
    
    // Initialize Google API
    initializeGoogleApi();
    
    // Initialize cart hover
    initCartHover();
    
    // Initialize select all checkbox
    initSelectAll();
    
    // ============== FIX: FORCE ATTACH DELETE SELECTED BUTTON LISTENER ==============
    const deleteBtn = document.getElementById('deleteSelectedBtn');
    if (deleteBtn) {
        deleteBtn.onclick = null;
        deleteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🗑️ Delete Selected button clicked');
            deleteSelectedItems();
        });
        console.log('✅ Delete button listener attached');
    } else {
        console.warn('⚠️ Delete Selected button not found');
    }
    // ============== END FIX ==============
});

function updateCartBadgeOnLoad() {
    const badge = document.getElementById('cartCount');
    if (badge) {
        const count = shoppingCart.reduce((s, i) => s + (i.quantity || 1), 0);
        badge.textContent = count;
    }
}

function renderShopProducts() {
    const grid = document.getElementById('shopProductsGrid');
    if (!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
            <div class="product-info">
                <h4>${p.name}</h4>
                <p>${p.description}</p>
                <div class="product-footer">
                    <div class="price-list">
                        <span>USD: ${convertPriceToUSD(p.price)}</span>
                        <span>SEK: ${convertPriceToSEK(p.price)}</span>
                        <span>PHP: ${p.price}</span>
                    </div>
                    <button onclick="navigateTo('photos');">Edit</button>
                </div>
            </div>
        </div>
    `).join('');
}

function convertPriceToUSD(priceStr) {
    const php = parseFloat(priceStr.replace(/[₱,\s]/g, '')) || 0;
    const rate = 0.018;
    return `$${(php * rate).toFixed(2)}`;
}

function convertPriceToSEK(priceStr) {
    const php = parseFloat(priceStr.replace(/[₱,\s]/g, '')) || 0;
    const rate = 0.20;
    return `${(php * rate).toFixed(2)} kr`;
}

// Reviews
const reviews = [
    { name: 'Maria', product: 'Photo Book', rating: 5, text: 'Beautiful quality and fast delivery!' },
    { name: 'Jon', product: 'Canvas', rating: 4, text: 'Great colors, slightly longer shipping.' },
    { name: 'Anna', product: 'Calendars', rating: 5, text: 'Perfect gift. Loved the layout options.' }
];
let currentReview = 0;

function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;
    container.innerHTML = reviews.map(r => `
        <div class="review-card">
            <div class="review-header"><strong>${r.name}</strong> — <em>${r.product}</em></div>
            <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
            <p>${r.text}</p>
        </div>
    `).join('');
    updateReviewVisibility();
}

function updateReviewVisibility() {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;
    const cards = container.querySelectorAll('.review-card');
    cards.forEach((c, i) => {
        c.style.display = i === currentReview ? 'block' : 'none';
    });
}

function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReviewVisibility();
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    updateReviewVisibility();
}

// LOGIN modal handlers
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

function handleLoginModal(e) {
    e.preventDefault();
    const email = document.getElementById('modalEmail').value;
    const password = document.getElementById('modalPassword').value;
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', email.split('@')[0]);
    localStorage.setItem('isLoggedIn', 'true');
    alert('Logged in (simulated).');
    closeLoginModal();
    updateLoginStatus();
}

function simulateSocialLogin(provider) {
    localStorage.setItem('userEmail', `${provider}-user@example.com`);
    localStorage.setItem('userName', provider + 'user');
    localStorage.setItem('isLoggedIn', 'true');
    alert(`Simulated ${provider} login`);
    closeLoginModal();
    updateLoginStatus();
}

// When opening chat, personalize
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    const chatMessages = document.getElementById('chatMessages');

    const isMobile = window.innerWidth <= 480;
    if (isMobile) {
        chatBox.classList.add('active');
        chatBox.style.width = '100%';
        chatBox.style.right = '0';
        chatBox.style.left = '0';
        chatBox.style.bottom = '0';
        chatBox.style.height = '100%';
        chatBox.style.borderRadius = '0';
    } else {
        chatBox.classList.toggle('active');
    }

    if (chatBox.classList.contains('active')) {
        const input = document.getElementById('chatInput');
        if (input) input.focus();

        const userName = localStorage.getItem('userName') || 'Guest';
        const existingWelcome = chatMessages.querySelector('.agent-welcome');
        if (!existingWelcome) {
            const welcomeMessageDiv = document.createElement('div');
            welcomeMessageDiv.className = 'chat-message bot-message agent-welcome';
            welcomeMessageDiv.innerHTML = `
                <div class="agent-welcome">
                    <img src="https://tse2.mm.bing.net/th/id/OIP.Il1NAN2piMWTFt8ZUoG8cwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Agent" class="agent-photo">
                    <div class="agent-message"><p>Hello ${userName}! 👋 I'm Kyle from FOTOCENTER. How can I help?</p></div>
                </div>
            `;
            chatMessages.appendChild(welcomeMessageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    } else {
        chatBox.style.width = '';
        chatBox.style.right = '';
        chatBox.style.left = '';
        chatBox.style.bottom = '';
        chatBox.style.height = '';
        chatBox.style.borderRadius = '';
    }
}

// Placeholder for backend chat connection (Node/Socket.io)
function initChatBackend() {
    try {
        if (typeof io === 'undefined') {
            console.info('Socket.io client not available. Backend chat disabled.');
            return;
        }

        const socket = io('http://localhost:3000');
        window.socket = socket;

        socket.on('connect', () => {
            console.info('Connected to chat backend');
            socket.emit('getHistory');
        });

        socket.on('history', (hist) => {
            try {
                const messages = document.getElementById('chatMessages');
                if (!messages) return;
                messages.innerHTML = '';
                hist.forEach(m => {
                    addMessage(m.text, m.sender === 'user' ? 'user' : 'bot');
                });
            } catch (e) {
                console.warn('Failed to render history', e);
            }
        });

        socket.on('message', (msg) => {
            if (!msg) return;
            addMessage(msg.text, msg.sender === 'user' ? 'user' : 'bot');
        });

        socket.on('disconnect', () => {
            console.info('Disconnected from chat backend');
        });
    } catch (e) {
        console.warn('Chat backend init failed', e);
    }
}

initChatBackend();

function displayHomeProducts() {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card" onclick="navigateTo('product-detail'); showProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="price">${product.price}</span>
                    <button class="add-btn" onclick="event.stopPropagation(); navigateTo('photos');">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function displayProductsGrid() {
    const productsGrid = document.getElementById('printProductsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="navigateTo('product-detail'); showProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="price">${product.price}</span>
                    <button class="add-btn" onclick="event.stopPropagation(); addToCartProduct(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = `
        <div class="detail-layout">
            <div class="detail-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
            </div>
            <div class="detail-info">
                <h2>${product.name}</h2>
                <p class="detail-desc">${product.description}</p>
                <div class="price-section">
                    <span class="detail-price">${product.price}</span>
                </div>
                <div class="quantity-section">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" min="1" value="1">
                </div>
                <button class="detail-add-btn" onclick="addToCartProduct(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

function addToCartProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    const cartItem = {
        id: productId,
        type: 'product',
        productType: product.name.toLowerCase().replace(' ', ''),
        productName: product.name,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: quantity,
        selected: true,
        sizeMode: 'fill',
        photoCount: 1,
        photos: [{ thumbnail: product.image, name: product.name }]
    };

    addToCart(cartItem);
    alert(`${product.name} added to cart!`);
}

function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    updateNavHighlight(pageId);

    if (pageId === 'photos') {
        setTimeout(() => {
            switchPhotoMode('upload');
        }, 50);
    }
    
    if (pageId === 'cart-page') {
        setTimeout(() => {
            renderCartPage();
        }, 100);
    }

    window.scrollTo(0, 0);
}

function updateNavHighlight(pageId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const onclick = link.getAttribute('onclick');
        if (onclick && onclick.includes(`'${pageId}'`)) {
            link.classList.add('active');
        }
    });
}

// Photo Mode Switching
function switchPhotoMode(mode) {
    const uploadModeBtn = document.getElementById('uploadModeBtn');
    const printModeBtn = document.getElementById('printModeBtn');
    const uploadView = document.getElementById('uploadView');
    const printsView = document.getElementById('printsView');

    if (mode === 'upload') {
        uploadModeBtn.classList.add('active');
        printModeBtn.classList.remove('active');
        uploadView.classList.add('active-view');
        uploadView.style.display = 'block';
        printsView.style.display = 'none';
    } else {
        uploadModeBtn.classList.remove('active');
        printModeBtn.classList.add('active');
        uploadView.classList.remove('active-view');
        uploadView.style.display = 'none';
        printsView.style.display = 'block';
        displayProductsGrid();
    }
}

// Setup Photo Editor
function setupPhotoEditor() {
    canvas = document.getElementById('photoCanvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    setupSliders();
    setupTextDrag();
}

function setupTextDrag() {
    if (!canvas) return;
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };

    function getMousePos(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] && e.touches[0].clientX);
        const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0] && e.touches[0].clientY);
        return {
            x: Math.round((clientX - rect.left) * (canvas.width / rect.width)),
            y: Math.round((clientY - rect.top) * (canvas.height / rect.height))
        };
    }

    function onDown(e) {
        if (!editorFeatures.textOverlay.active) return;
        const pos = getMousePos(e);
        let tx = editorFeatures.textOverlay.x;
        let ty = editorFeatures.textOverlay.y;
        if (tx <= 100) tx = Math.round((tx / 100) * canvas.width);
        if (ty <= 100) ty = Math.round((ty / 100) * canvas.height);

        const textSize = editorFeatures.textOverlay.size || 20;
        const textWidth = ctx.measureText(editorFeatures.textOverlay.text || '').width;
        const textHeight = textSize;

        if (pos.x >= tx - textWidth / 2 && pos.x <= tx + textWidth / 2 && pos.y >= ty - textHeight && pos.y <= ty + 10) {
            isDragging = true;
            dragOffset.x = pos.x - tx;
            dragOffset.y = pos.y - ty;
            e.preventDefault();
        }
    }

    function onMove(e) {
        if (!isDragging) return;
        const pos = getMousePos(e);
        const newX = pos.x - dragOffset.x;
        const newY = pos.y - dragOffset.y;
        editorFeatures.textOverlay.x = Math.round((newX / canvas.width) * 100);
        editorFeatures.textOverlay.y = Math.round((newY / canvas.height) * 100);
        const tx = document.getElementById('textX');
        const ty = document.getElementById('textY');
        const txVal = document.getElementById('textXValue');
        const tyVal = document.getElementById('textYValue');
        if (tx && txVal) { tx.value = editorFeatures.textOverlay.x; txVal.textContent = tx.value; }
        if (ty && tyVal) { ty.value = editorFeatures.textOverlay.y; tyVal.textContent = ty.value; }
        drawImage();
        e.preventDefault();
    }

    function onUp(e) {
        if (isDragging) {
            isDragging = false;
        }
    }

    canvas.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    canvas.addEventListener('touchstart', onDown, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend', onUp);
}

function setupSliders() {
    const sliders = ['brightness', 'contrast', 'saturation'];
    sliders.forEach(slider => {
        const sliderElement = document.getElementById(`${slider}Slider`);
        const valueElement = document.getElementById(`${slider}Value`);

        if (sliderElement && valueElement) {
            sliderElement.addEventListener('input', function () {
                adjustments[slider] = parseInt(this.value);
                valueElement.textContent = `${this.value}%`;
                drawImage();
            });
            sliderElement.addEventListener('change', function () {
                saveCurrentAdjustments();
                pushSnapshotForCurrentImage();
            });
        }
    });
}

// Drag and Drop
function setupDragAndDrop() {
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('photoInput');

    if (!dropArea || !fileInput) {
        console.warn('setupDragAndDrop: missing elements', { dropAreaFound: !!dropArea, fileInputFound: !!fileInput });
        return;
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropArea.classList.add('drag-over');
    }

    function unhighlight() {
        dropArea.classList.remove('drag-over');
    }

    dropArea.addEventListener('drop', handleDrop, false);
    fileInput.addEventListener('change', handleFileSelect, false);
    console.debug('setupDragAndDrop: listeners attached for dropArea and file input');
}

function handleFileSelect(e) {
    const files = e.target.files;
    console.debug('handleFileSelect: files selected', files && files.length);
    processFiles(files);
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    console.debug('handleDrop: files dropped', files && files.length);
    processFiles(files);
}

function processFiles(files) {
    if (!files || files.length === 0) {
        console.warn('processFiles: no files to process');
        return;
    }

    Array.from(files).forEach(file => {
        try {
            if (file.type && file.type.match('image.*')) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    console.debug('processFiles: file read complete', file.name);
                    addImageToGallery(e.target.result, file.name);
                };
                reader.onerror = function (err) {
                    console.error('processFiles: FileReader error', err);
                };
                reader.readAsDataURL(file);
            } else {
                console.warn('processFiles: skipped non-image file', file.name, file.type);
            }
        } catch (err) {
            console.error('processFiles: error processing file', file, err);
        }
    });
}

function addImageToGallery(dataUrl, filename) {
    const image = new Image();
    image.onload = function () {
        try {
            const newImage = {
                id: Date.now() + Math.random(),
                src: dataUrl,
                name: filename,
                original: dataUrl,
                baseOriginal: dataUrl,
                adjustments: { ...adjustments },
                filter: 'none',
                history: [dataUrl],
                redo: []
            };

            uploadedImages.push(newImage);
            originalImages.push(dataUrl);
            updateImageGallery();
            updateUploadCount();

            if (uploadedImages.length === 1) {
                selectImage(0);
                setTimeout(() => {
                    pushSnapshotForCurrentImage();
                    updateUndoRedoButtons();
                }, 300);
            }
        } catch (err) {
            console.error('addImageToGallery: failed to add image', filename, err);
        }
    };
    image.src = dataUrl;
}

function updateImageGallery() {
    const container = document.getElementById('uploadedImages');
    if (!container) return;

    container.innerHTML = uploadedImages.map((image, index) => `
        <div class="uploaded-thumbnail ${index === currentImageIndex ? 'active' : ''}">
            <div class="thumb-remove" onclick="removeUploadedImage(event, ${index})">&times;</div>
            <div class="thumb-click" onclick="selectImage(${index})">
                <img src="${image.src}" alt="${image.name}">
                <div class="thumb-overlay">
                    <span class="thumb-name">${image.name.substring(0, 10)}...</span>
                </div>
            </div>
        </div>
    `).join('');
}

function removeUploadedImage(e, index) {
    try {
        e.stopPropagation();
    } catch (err) { }

    if (index < 0 || index >= uploadedImages.length) return;

    const wasCurrent = index === currentImageIndex;
    uploadedImages.splice(index, 1);

    if (uploadedImages.length === 0) {
        currentImageIndex = -1;
        const overlay = document.getElementById('canvasOverlay');
        if (overlay) overlay.style.display = 'block';
        updateImageGallery();
        updateUploadCount();
        return;
    }

    if (wasCurrent) {
        const newIndex = Math.min(index, uploadedImages.length - 1);
        selectImage(newIndex);
    } else {
        if (currentImageIndex > index) currentImageIndex--;
        updateImageGallery();
    }

    updateUploadCount();
}

function updateUploadCount() {
    const countElement = document.getElementById('uploadCount');
    if (countElement) {
        countElement.textContent = uploadedImages.length;
    }
}

function selectImage(index) {
    if (index < 0 || index >= uploadedImages.length) return;

    currentImageIndex = index;
    const imageData = uploadedImages[index];

    adjustments = { ...imageData.adjustments };
    currentFilter = imageData.filter;

    updateSliderValues();
    updateImageGallery();

    const overlay = document.getElementById('canvasOverlay');
    if (overlay) overlay.style.display = 'none';

    drawImage();
}

function updateSliderValues() {
    const sliders = ['brightness', 'contrast', 'saturation'];
    sliders.forEach(slider => {
        const sliderElement = document.getElementById(`${slider}Slider`);
        const valueElement = document.getElementById(`${slider}Value`);

        if (sliderElement && valueElement) {
            sliderElement.value = adjustments[slider];
            valueElement.textContent = `${adjustments[slider]}%`;
        }
    });
}

// Image Editing Functions
function adjustBrightness(amount) {
    adjustments.brightness = Math.max(0, Math.min(200, adjustments.brightness + amount));
    updateSliderValues();
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function adjustContrast(amount) {
    adjustments.contrast = Math.max(0, Math.min(200, adjustments.contrast + amount));
    updateSliderValues();
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function adjustSaturation(amount) {
    adjustments.saturation = Math.max(0, Math.min(200, adjustments.saturation + amount));
    updateSliderValues();
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function rotateImage(degrees) {
    adjustments.rotation = (adjustments.rotation + degrees) % 360;
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function flipHorizontal() {
    adjustments.flipHorizontal = !adjustments.flipHorizontal;
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function flipVertical() {
    adjustments.flipVertical = !adjustments.flipVertical;
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function applyFilter(filter) {
    currentFilter = filter;
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
}

function saveCurrentAdjustments() {
    if (currentImageIndex !== -1) {
        uploadedImages[currentImageIndex].adjustments = { ...adjustments };
        uploadedImages[currentImageIndex].filter = currentFilter;

        const fullSizeSnapshot = canvas.toDataURL('image/png');

        const thumbnailCanvas = document.createElement('canvas');
        const tempCtx = thumbnailCanvas.getContext('2d');
        const img = new Image();

        img.onload = function () {
            thumbnailCanvas.width = 100;
            thumbnailCanvas.height = 100;
            tempCtx.save();

            tempCtx.filter = `brightness(${adjustments.brightness}%) contrast(${adjustments.contrast}%) saturate(${adjustments.saturation}%)`;

            tempCtx.translate(thumbnailCanvas.width / 2, thumbnailCanvas.height / 2);
            tempCtx.rotate((adjustments.rotation * Math.PI) / 180);

            if (adjustments.flipHorizontal) tempCtx.scale(-1, 1);
            if (adjustments.flipVertical) tempCtx.scale(1, -1);

            tempCtx.translate(-thumbnailCanvas.width / 2, -thumbnailCanvas.height / 2);

            if (currentFilter === 'grayscale') {
                tempCtx.filter += ' grayscale(100%)';
            } else if (currentFilter === 'sepia') {
                tempCtx.filter += ' sepia(100%)';
            } else if (currentFilter === 'vintage') {
                tempCtx.filter += ' sepia(80%) contrast(120%) brightness(90%)';
            } else if (currentFilter === 'cool') {
                tempCtx.filter += ' contrast(110%) saturate(80%)';
            } else if (currentFilter === 'warm') {
                tempCtx.filter += ' contrast(110%) saturate(120%)';
            }

            tempCtx.drawImage(img, 0, 0, thumbnailCanvas.width, thumbnailCanvas.height);
            tempCtx.restore();

            tempCtx.save();
            tempCtx.font = '10px Arial';
            tempCtx.fillStyle = 'rgba(255,255,255,0.7)';
            tempCtx.textAlign = 'right';
            tempCtx.fillText('FOTOCENTER', thumbnailCanvas.width - 6, thumbnailCanvas.height - 6);
            tempCtx.restore();

            uploadedImages[currentImageIndex].src = thumbnailCanvas.toDataURL();
            updateImageGallery();

            const imgObj = uploadedImages[currentImageIndex];
            imgObj.history = imgObj.history || [];
            const last = imgObj.history[imgObj.history.length - 1];
            if (last !== fullSizeSnapshot) {
                imgObj.history.push(fullSizeSnapshot);
                if (imgObj.history.length > 30) imgObj.history.shift();
                imgObj.redo = [];
            }
            updateUndoRedoButtons();
        };
        img.src = uploadedImages[currentImageIndex].original;
    }
}

// ============== FIXED UNDO/REDO SYSTEM ==============
function pushSnapshotForCurrentImage() {
    if (currentImageIndex === -1 || !canvas) return;

    const imgObj = uploadedImages[currentImageIndex];
    const snapshot = canvas.toDataURL('image/png');

    if (!imgObj.history) imgObj.history = [];
    if (!imgObj.redo) imgObj.redo = [];

    if (imgObj.history[imgObj.history.length - 1] !== snapshot) {
        imgObj.history.push(snapshot);
        imgObj.redo = [];
        console.log('📸 History saved. Length:', imgObj.history.length);
    }

    updateUndoRedoButtons();
}

function undo() {
    if (currentImageIndex === -1) {
        console.log('⛔ No image selected');
        return;
    }

    const imgObj = uploadedImages[currentImageIndex];
    if (!imgObj.history || imgObj.history.length <= 1) {
        console.log('⛔ Nothing to undo');
        return;
    }

    console.log('↩️ Undo called. Current history length:', imgObj.history.length);

    const current = canvas.toDataURL('image/png');
    imgObj.redo.push(current);

    imgObj.history.pop();
    const previous = imgObj.history[imgObj.history.length - 1];

    imgObj.original = previous;

    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        console.log('✅ Undo successful. New history length:', imgObj.history.length);
    };
    img.src = previous;

    updateUndoRedoButtons();
}

function redo() {
    if (currentImageIndex === -1) {
        console.log('⛔ No image selected');
        return;
    }

    const imgObj = uploadedImages[currentImageIndex];
    if (!imgObj.redo || imgObj.redo.length === 0) {
        console.log('⛔ Nothing to redo');
        return;
    }

    console.log('↪️ Redo called. Redo stack length:', imgObj.redo.length);

    const next = imgObj.redo.pop();

    const current = canvas.toDataURL('image/png');
    imgObj.history.push(current);

    imgObj.original = next;

    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        console.log('✅ Redo successful');
    };
    img.src = next;

    updateUndoRedoButtons();
}

function resetImage() {
    if (currentImageIndex === -1) return;

    const imgObj = uploadedImages[currentImageIndex];

    adjustments = {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        rotation: 0,
        flipHorizontal: false,
        flipVertical: false
    };
    currentFilter = 'none';

    imgObj.original = imgObj.baseOriginal;

    imgObj.history = [imgObj.baseOriginal];
    imgObj.redo = [];

    const img = new Image();
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        updateSliderValues();
        updateUndoRedoButtons();
        console.log('✅ Reset complete - back to original');
    };
    img.src = imgObj.baseOriginal;
}

function updateUndoRedoButtons() {
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    let canUndo = false;
    let canRedo = false;

    if (currentImageIndex !== -1) {
        const imgObj = uploadedImages[currentImageIndex];
        if (imgObj) {
            canUndo = (imgObj.history && imgObj.history.length > 1);
            canRedo = (imgObj.redo && imgObj.redo.length > 0);
        }
    }

    if (!canUndo) canUndo = undoStack.length > 0;
    if (!canRedo) canRedo = redoStack.length > 0;

    if (undoBtn) undoBtn.disabled = !canUndo;
    if (redoBtn) redoBtn.disabled = !canRedo;

    console.log(`🔄 Undo: ${canUndo ? 'enabled' : 'disabled'}, Redo: ${canRedo ? 'enabled' : 'disabled'}`);
}

// ============== FIXED DRAWIMAGE FUNCTION ==============
function drawImage() {
    if (currentImageIndex === -1 || !canvas || !ctx) return;

    const image = uploadedImages[currentImageIndex];
    const img = new Image();

    img.onload = function () {
        console.log('📸 Drawing image. Product:', currentProduct);
        console.log('Image dimensions:', img.width, 'x', img.height);

        ctx.save();

        if (!cropTool.active) {
            canvas.width = img.width;
            canvas.height = img.height;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((adjustments.rotation * Math.PI) / 180);

        if (adjustments.flipHorizontal) ctx.scale(-1, 1);
        if (adjustments.flipVertical) ctx.scale(1, -1);

        ctx.translate(-canvas.width / 2, -canvas.height / 2);

        let filterString = `brightness(${adjustments.brightness}%) contrast(${adjustments.contrast}%) saturate(${adjustments.saturation}%)`;
        if (currentFilter !== 'none' && editorFeatures.filters[currentFilter]) {
            filterString += ' ' + editorFeatures.filters[currentFilter];
        }
        ctx.filter = filterString;

        if (cropTool.active) {
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

            cropTool.imageX = 0;
            cropTool.imageY = 0;
            cropTool.imageWidth = canvas.width;
            cropTool.imageHeight = canvas.height;
        } else {
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

            cropTool.imageX = 0;
            cropTool.imageY = 0;
            cropTool.imageWidth = canvas.width;
            cropTool.imageHeight = canvas.height;
        }

        ctx.restore();

        if (editorFeatures.textOverlay.active) {
            const text = editorFeatures.textOverlay;
            ctx.save();
            ctx.font = `${text.size}px ${text.font}`;
            ctx.fillStyle = text.color;
            ctx.textAlign = 'center';
            let xPos = text.x;
            let yPos = text.y;
            if (xPos <= 100) xPos = Math.round((xPos / 100) * canvas.width);
            if (yPos <= 100) yPos = Math.round((yPos / 100) * canvas.height);
            ctx.fillText(text.text, xPos, yPos);
            ctx.restore();
        }

        // WATERMARK REMOVED

        if (cropTool.active) {
            console.log('✂️ Crop active, updating handles');
            setTimeout(() => {
                setupCropHandles();
            }, 50);
        }
    };

    img.src = image.original;
}

// ============== DROPDOWN MENU FUNCTIONS ==============
function setupDropdownMenu() {
    const dropdownBtn = document.getElementById('productDropdownBtn');
    const dropdownMenu = document.getElementById('productDropdownMenu');

    if (!dropdownBtn || !dropdownMenu) return;

    const productTypes = ['photocards', 'calendar', 'photobook', 'canvas', 'mousepads', 'doublecards'];

    dropdownMenu.innerHTML = productTypes.map(type => {
        const icon = productIcons[type] || '📷';
        const name = productDisplayNames[type] || type;
        const isActive = currentProduct === type ? 'active' : '';

        return `
            <div class="dropdown-item ${isActive}" data-product="${type}">
                <span>${name}</span>
                <span class="item-icon">${icon}</span>
            </div>
        `;
    }).join('');

    dropdownBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            const productType = this.getAttribute('data-product');

            dropdownMenu.querySelectorAll('.dropdown-item').forEach(el => {
                el.classList.remove('active');
            });
            this.classList.add('active');

            updateProductBadge(productType);

            dropdownMenu.classList.remove('show');

            selectProduct(productType);
        });
    });

    document.addEventListener('click', function () {
        dropdownMenu.classList.remove('show');
    });
}

function updateProductBadge(productType) {
    const badge = document.getElementById('currentProductBadge');
    if (!badge) return;

    if (productType && productDisplayNames[productType]) {
        const icon = productIcons[productType] || '📷';
        const name = productDisplayNames[productType];
        badge.innerHTML = `<span class="badge-text">${icon} ${name}</span>`;
    } else {
        badge.innerHTML = `<span class="badge-text">None</span>`;
    }
}

// ============== UPDATED PRODUCT SELECTION FUNCTION ==============
function selectProduct(type) {
    currentProduct = type;              // Update local variable
    window.currentProduct = type;

    document.querySelectorAll('.product-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-product') === type);
    });

    updateProductBadge(type);
    
    // Update print options based on selected product
    updatePrintOptions(type);

    if (templates[type]) {
        templateImage = new Image();
        templateImage.onload = function () {
            drawImage();
        };
        templateImage.src = templates[type];
    } else {
        templateImage = null;
        drawImage();
    }
}

// ============== NEW PRINT OPTIONS FUNCTIONS ==============

// Global variables for print options
let currentQuantity = 1;
let basePricePerUnit = 25;

// Update quantity
function updateQuantity(change) {
    currentQuantity = Math.max(1, currentQuantity + change);
    document.getElementById('quantityDisplay').textContent = currentQuantity;
    calculatePrice();
}

window.calculatePrice = function calculatePrice() {
    console.log('💰 Calculating price in USD...');
    
    // Get current product
    const productType = window.currentProduct || 'photocards';
    console.log('1. Product type:', productType);
    
    // Get selected size
    const selectedSize = document.querySelector('input[name="advancedPrintSize"]:checked');
    console.log('2. Selected size element:', selectedSize);
    
    let basePriceUSD = 0.45; // Default USD price
    
    if (selectedSize) {
        const sizeValue = selectedSize.value;
        console.log('3. Size value:', sizeValue);
        
        if (sizeValue === 'custom') {
            const width = parseFloat(document.getElementById('customWidth')?.value) || 8;
            const height = parseFloat(document.getElementById('customHeight')?.value) || 10;
            const area = width * height;
            basePriceUSD = Math.max(0.45, Math.round(area * 0.009 * 100) / 100);
            console.log('4. Custom size calculation:', {width, height, area, basePriceUSD});
        } else {
            // Get price from config based on current product
            const options = window.printOptionsConfig?.[productType] || window.printOptionsConfig?.photocards || [];
            console.log('4. Options for this product:', options);
            
            const option = options.find(opt => opt.value === sizeValue);
            console.log('5. Found option:', option);
            
            basePriceUSD = option ? parseFloat(option.price) * 0.018 : 0.45;
            console.log('6. Calculated basePriceUSD:', basePriceUSD);
        }
    } else {
        console.log('3. No size selected, using default');
    }
    
    console.log('7. Final basePriceUSD before paper:', basePriceUSD);
    
    // Get paper type price
    let paperUpgradeUSD = 0;
    const selectedPaper = document.querySelector('input[name="paperType"]:checked');
    console.log('8. Selected paper element:', selectedPaper);
    console.log('9. Selected paper value:', selectedPaper?.value);

    if (selectedPaper) {
        const paperValue = selectedPaper.value;
        console.log('10. Paper value:', paperValue);
        
        switch(paperValue) {
            case 'glossy': 
                paperUpgradeUSD = 0.18; 
                console.log('11. Glossy selected: $0.18');
                break;
            case 'matte': 
                paperUpgradeUSD = 0.27; 
                console.log('11. Matte selected: $0.27');
                break;
            case 'premium': 
                paperUpgradeUSD = 0.45; 
                console.log('11. Premium selected: $0.45');
                break;
            default: 
                paperUpgradeUSD = 0; 
                console.log('11. Standard selected: $0.00');
        }
    } else {
        console.log('10. No paper selected, defaulting to 0');
    }
    console.log('12. Final paperUpgradeUSD:', paperUpgradeUSD);
    
    // Get quantity
    const quantity = parseInt(document.getElementById('quantityDisplay')?.textContent || '1');
    console.log('13. Quantity:', quantity);
    
    const priceBeforeQuantity = basePriceUSD + paperUpgradeUSD;
    const totalPriceUSD = priceBeforeQuantity * quantity;
    
    console.log(`14. 📏 Base: $${basePriceUSD.toFixed(2)}, 📄 Paper: $${paperUpgradeUSD.toFixed(2)}, 🔢 Qty: ${quantity}, 💰 Total: $${totalPriceUSD.toFixed(2)}`);
    
    // Update data-usd attributes
    document.getElementById('basePrice')?.setAttribute('data-usd', basePriceUSD);
    document.getElementById('paperUpgradePrice')?.setAttribute('data-usd', paperUpgradeUSD);
    document.getElementById('quantityMultiplier')?.setAttribute('data-usd', priceBeforeQuantity * quantity);
    document.getElementById('advancedTotalPrice')?.setAttribute('data-usd', totalPriceUSD);
    document.getElementById('finalPrice')?.setAttribute('data-usd', totalPriceUSD);
    
    // Format with current currency
    if (typeof window.formatPrice === 'function') {
        document.getElementById('basePrice').textContent = window.formatPrice(basePriceUSD);
        document.getElementById('paperUpgradePrice').textContent = window.formatPrice(paperUpgradeUSD);
        document.getElementById('quantityMultiplier').textContent = window.formatPrice(priceBeforeQuantity * quantity);
        document.getElementById('advancedTotalPrice').textContent = window.formatPrice(totalPriceUSD);
        document.getElementById('finalPrice').textContent = window.formatPrice(totalPriceUSD);
    } else {
        document.getElementById('basePrice').textContent = `$${basePriceUSD.toFixed(2)}`;
        document.getElementById('paperUpgradePrice').textContent = `$${paperUpgradeUSD.toFixed(2)}`;
        document.getElementById('quantityMultiplier').textContent = `$${(priceBeforeQuantity * quantity).toFixed(2)}`;
        document.getElementById('advancedTotalPrice').textContent = `$${totalPriceUSD.toFixed(2)}`;
        document.getElementById('finalPrice').textContent = `$${totalPriceUSD.toFixed(2)}`;
    }
}

// Handle when size is selected
function onSizeSelect() {
    const selectedSize = document.querySelector('input[name="advancedPrintSize"]:checked');
    if (!selectedSize) return;
    
    const customSizeContainer = document.getElementById('customSizeContainer');
    
    if (selectedSize.value === 'custom') {
        customSizeContainer.style.display = 'block';
        document.getElementById('customWidth').disabled = false;
        document.getElementById('customHeight').disabled = false;
        document.getElementById('customUnit').disabled = false;
        
        // Update custom size with current unit
        updateCustomSizeUnit();
    } else {
        customSizeContainer.style.display = 'none';
        document.getElementById('customWidth').disabled = true;
        document.getElementById('customHeight').disabled = true;
        document.getElementById('customUnit').disabled = true;
    }
    
    calculatePrice();
}

// Update print options based on selected product
function updatePrintOptions(productType) {
    console.log('Updating print options for:', productType);
    const container = document.getElementById('sizeOptionsContainer');
    
    if (!container) {
        console.error('Size options container not found!');
        return;
    }
    
    const options = printOptionsConfig[productType] || printOptionsConfig.photocards;
    console.log('Options:', options);
    
    let html = '';
    options.forEach(opt => {
        // Convert PHP price to USD (1 PHP = 0.018 USD)
        const usdPrice = (parseFloat(opt.price) * 0.018).toFixed(2);
        html += `
            <label class="print-size-btn small">
                <input type="radio" name="advancedPrintSize" value="${opt.value}" onchange="onSizeSelect()">
                <span class="size-label">${opt.value}"</span>
                <span class="size-price" data-usd="${usdPrice}">$${usdPrice}</span>
            </label>
        `;
    });
    
    // Add custom option
    html += `
        <label class="print-size-btn small custom">
            <input type="radio" name="advancedPrintSize" value="custom" onchange="onSizeSelect()">
            <span class="size-label">Custom</span>
        </label>
    `;
    
    container.innerHTML = html;
    
    // Select first option by default
    const firstRadio = container.querySelector('input[type="radio"]');
    if (firstRadio) {
        firstRadio.checked = true;
    }
    
    // Update unit display
    if (typeof updateUnitDisplay === 'function') {
        updateUnitDisplay();
    }
    
    // Calculate price
    if (typeof calculatePrice === 'function') {
        calculatePrice();
    }
}

// Initialize print options
function initPrintOptions() {
    // Set up listeners for custom size inputs
    const advancedInputs = ['customWidth', 'customHeight', 'customUnit'];
    advancedInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', function() {
                // Store inches value when manually changed
                if (currentUnit === 'inches') {
                    this.setAttribute('data-inches', this.value);
                }
                calculatePrice();
            });
        }
    });
    
    // Set up paper type listeners
    document.querySelectorAll('input[name="paperType"]').forEach(radio => {
        radio.addEventListener('change', calculatePrice);
    });
    
    // Initial update
    updatePrintOptions(currentProduct || 'photocards');
}

// ============== UPDATED ADD TO CART FUNCTION ==============
window.addPhotoToCart = function() {
    if (uploadedImages.length === 0) {
        alert('Please upload at least one photo first.');
        return;
    }
    
    // Get print options
    let size, price, paperType = 'standard', sizeMode = 'fill', isCustom = false;
    let customWidth = null, customHeight = null, customUnit = 'inches';
    
    // Get sizeMode from radio buttons
    const sizeModeRadio = document.querySelector('input[name="sizeMode"]:checked');
    sizeMode = sizeModeRadio ? sizeModeRadio.value : 'fill';
    
    // Get paper type from radio buttons
    const paperTypeRadio = document.querySelector('input[name="paperType"]:checked');
    paperType = paperTypeRadio ? paperTypeRadio.value : 'standard';
    
    // Get selected size
    const selectedSize = document.querySelector('input[name="advancedPrintSize"]:checked');
    size = selectedSize ? selectedSize.value : '4x6';
    
    if (size === 'custom') {
        isCustom = true;
        // Always store in inches
        const widthInput = document.getElementById('customWidth');
        const heightInput = document.getElementById('customHeight');
        const unitSelect = document.getElementById('customUnit');
        
        // Convert to inches if needed
        if (currentUnit === 'cm') {
            customWidth = (parseFloat(widthInput.value) / 2.54).toFixed(2);
            customHeight = (parseFloat(heightInput.value) / 2.54).toFixed(2);
        } else if (currentUnit === 'ml') {
            customWidth = (parseFloat(widthInput.value) / 25.4).toFixed(2);
            customHeight = (parseFloat(heightInput.value) / 25.4).toFixed(2);
        } else {
            customWidth = widthInput.value;
            customHeight = heightInput.value;
        }
        
        customUnit = 'inches';
        size = `${customWidth} x ${customHeight} ${customUnit}`;
    }
    
    price = document.getElementById('advancedTotalPrice').textContent;
    
    // Get the actual product name from currentProduct
    const productName = productDisplayNames[currentProduct] || 'Photo';
    
    // Store ONLY thumbnails
    const photosData = uploadedImages.map(img => ({
        name: img.name,
        thumbnail: img.src,
    }));
    
    // Calculate total price (base price × photo count)
    const basePrice = parseFloat(price.toString().replace('₱', '')) || 0;
    const totalPrice = basePrice * uploadedImages.length;
    
    // Create cart item with ONLY thumbnail data
    const cartItem = {
        id: 'photo-' + Date.now(),
        type: 'photo',
        productType: currentProduct,
        productName: productName,
        name: `${productName} (${size}) - ${uploadedImages.length} photos`,
        size: size,
        
        photos: photosData,
        photoCount: uploadedImages.length,
        
        displayImage: uploadedImages[0]?.src || null,
        
        price: `₱${totalPrice.toFixed(2)}`,
        basePrice: basePrice,
        quantity: 1,
        paperType: paperType,
        sizeMode: sizeMode,
        isCustom: isCustom,
        customDimensions: isCustom ? { width: customWidth, height: customHeight, unit: customUnit } : null,
        originalName: uploadedImages[0]?.name || 'photo',
        timestamp: new Date().toISOString(),
        selected: true
    };
    
    // Add to cart
    addToCart(cartItem);
    
    // Reset editor
    uploadedImages = [];
    currentImageIndex = -1;
    updateImageGallery();
    
    const canvas = document.getElementById('photoCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const overlay = document.getElementById('canvasOverlay');
    if (overlay) overlay.style.display = 'block';
    
    document.getElementById('uploadCount').textContent = '0';
    
    currentQuantity = 1;
    document.getElementById('quantityDisplay').textContent = '1';
    calculatePrice();
    
    console.log('✨ Editor reset complete! Cart has thumbnails only');
};

// ============== CROP TOOL FUNCTIONS ==============
function setupCropHandles() {
    console.log('setupCropHandles called');
    if (!canvas) {
        console.log('Canvas not ready');
        return;
    }

    removeCropHandles();

    const container = document.querySelector('.canvas-container');
    if (!container) {
        console.log('Canvas container not found');
        return;
    }

    if (!cropTool.active) {
        console.log('Crop tool not active');
        return;
    }

    container.style.position = 'relative';

    const containerRect = container.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();

    console.log('Container rect:', containerRect);
    console.log('Canvas rect:', canvasRect);

    const scaleX = canvasRect.width / canvas.width;
    const scaleY = canvasRect.height / canvas.height;

    console.log('Scale factors:', { scaleX, scaleY });

    const cropCanvasX = cropTool.imageX + (cropTool.x / 100) * cropTool.imageWidth;
    const cropCanvasY = cropTool.imageY + (cropTool.y / 100) * cropTool.imageHeight;
    const cropCanvasW = (cropTool.width / 100) * cropTool.imageWidth;
    const cropCanvasH = (cropTool.height / 100) * cropTool.imageHeight;

    const screenX = canvasRect.left + (cropCanvasX * scaleX);
    const screenY = canvasRect.top + (cropCanvasY * scaleY);
    const screenW = cropCanvasW * scaleX;
    const screenH = cropCanvasH * scaleY;

    const relX = screenX - containerRect.left;
    const relY = screenY - containerRect.top;

    console.log('Crop box pixels (relative to container):', { relX, relY, screenW, screenH });

    const cropWrapper = document.createElement('div');
    cropWrapper.className = 'crop-wrapper';
    cropWrapper.style.position = 'absolute';
    cropWrapper.style.top = '0';
    cropWrapper.style.left = '0';
    cropWrapper.style.width = '100%';
    cropWrapper.style.height = '100%';
    cropWrapper.style.pointerEvents = 'none';
    cropWrapper.style.zIndex = '10000';
    container.appendChild(cropWrapper);

    const cropBox = document.createElement('div');
    cropBox.className = 'crop-box';
    cropBox.style.position = 'absolute';
    cropBox.style.left = relX + 'px';
    cropBox.style.top = relY + 'px';
    cropBox.style.width = screenW + 'px';
    cropBox.style.height = screenH + 'px';
    cropBox.style.border = '2px solid white';
    cropBox.style.boxShadow = '0 0 0 9999px rgba(0,0,0,0.5)';
    cropBox.style.cursor = 'move';
    cropBox.style.pointerEvents = 'auto';
    cropBox.style.zIndex = '10002';
    cropBox.setAttribute('data-crop-box', 'true');
    cropWrapper.appendChild(cropBox);

    cropBox.addEventListener('mousedown', startCropMove);
    cropBox.addEventListener('touchstart', startCropMove, { passive: false });

    const handleSize = 24;
    const handlePositions = [
        { pos: 'nw', cursor: 'nw-resize', left: relX, top: relY },
        { pos: 'n', cursor: 'n-resize', left: relX + screenW / 2, top: relY },
        { pos: 'ne', cursor: 'ne-resize', left: relX + screenW, top: relY },
        { pos: 'e', cursor: 'e-resize', left: relX + screenW, top: relY + screenH / 2 },
        { pos: 'se', cursor: 'se-resize', left: relX + screenW, top: relY + screenH },
        { pos: 's', cursor: 's-resize', left: relX + screenW / 2, top: relY + screenH },
        { pos: 'sw', cursor: 'sw-resize', left: relX, top: relY + screenH },
        { pos: 'w', cursor: 'w-resize', left: relX, top: relY + screenH / 2 }
    ];

    handlePositions.forEach(pos => {
        const handle = document.createElement('div');
        handle.className = `crop-handle ${pos.pos}`;
        handle.style.position = 'absolute';
        handle.style.width = handleSize + 'px';
        handle.style.height = handleSize + 'px';
        handle.style.background = 'white';
        handle.style.border = '3px solid #ff6b35';
        handle.style.borderRadius = '50%';
        handle.style.boxShadow = '0 2px 8px rgba(0,0,0,0.5)';
        handle.style.zIndex = '10003';
        handle.style.cursor = pos.cursor;
        handle.style.pointerEvents = 'auto';
        handle.style.left = (pos.left - handleSize / 2) + 'px';
        handle.style.top = (pos.top - handleSize / 2) + 'px';

        handle.addEventListener('mousedown', (e) => startCropResize(e, pos.pos));
        handle.addEventListener('touchstart', (e) => startCropResize(e, pos.pos), { passive: false });

        cropWrapper.appendChild(handle);
    });

    console.log('All crop handles created');
}

function removeCropHandles() {
    document.querySelectorAll('.crop-wrapper').forEach(el => el.remove());
}

function updateCropHandlesPosition() {
    if (!canvas || !cropTool.active) return;

    const container = document.querySelector('.canvas-container');
    if (!container) return;

    const wrapper = container.querySelector('.crop-wrapper');
    if (!wrapper) return;

    const containerRect = container.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();

    const scaleX = canvasRect.width / canvas.width;
    const scaleY = canvasRect.height / canvas.height;

    const cropCanvasX = cropTool.imageX + (cropTool.x / 100) * cropTool.imageWidth;
    const cropCanvasY = cropTool.imageY + (cropTool.y / 100) * cropTool.imageHeight;
    const cropCanvasW = (cropTool.width / 100) * cropTool.imageWidth;
    const cropCanvasH = (cropTool.height / 100) * cropTool.imageHeight;

    const screenX = canvasRect.left + (cropCanvasX * scaleX);
    const screenY = canvasRect.top + (cropCanvasY * scaleY);
    const screenW = cropCanvasW * scaleX;
    const screenH = cropCanvasH * scaleY;

    const relX = screenX - containerRect.left;
    const relY = screenY - containerRect.top;

    const cropBox = wrapper.querySelector('[data-crop-box]');
    if (cropBox) {
        cropBox.style.left = relX + 'px';
        cropBox.style.top = relY + 'px';
        cropBox.style.width = screenW + 'px';
        cropBox.style.height = screenH + 'px';
    }

    const handlePositions = {
        'nw': [relX, relY],
        'n': [relX + screenW / 2, relY],
        'ne': [relX + screenW, relY],
        'e': [relX + screenW, relY + screenH / 2],
        'se': [relX + screenW, relY + screenH],
        's': [relX + screenW / 2, relY + screenH],
        'sw': [relX, relY + screenH],
        'w': [relX, relY + screenH / 2]
    };

    wrapper.querySelectorAll('.crop-handle').forEach(handle => {
        const posClass = Array.from(handle.classList).find(c =>
            ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'].includes(c)
        );
        if (posClass && handlePositions[posClass]) {
            const [hx, hy] = handlePositions[posClass];
            handle.style.left = (hx - 12) + 'px';
            handle.style.top = (hy - 12) + 'px';
        }
    });
}

function startCropResize(e, handle) {
    e.preventDefault();
    e.stopPropagation();
    cropTool.resizing = true;
    cropTool.handle = handle;

    const pt = getEventClient(e);
    cropTool.startX = pt.clientX;
    cropTool.startY = pt.clientY;
    cropTool.startCropX = cropTool.x;
    cropTool.startCropY = cropTool.y;
    cropTool.startCropWidth = cropTool.width;
    cropTool.startCropHeight = cropTool.height;

    window.addEventListener('mousemove', onCropResize);
    window.addEventListener('mouseup', onCropResizeEnd);
    window.addEventListener('touchmove', onCropResize, { passive: false });
    window.addEventListener('touchend', onCropResizeEnd);
}

function onCropResize(e) {
    if (!cropTool.resizing) return;
    e.preventDefault();

    const pt = getEventClient(e);
    const rect = canvas.getBoundingClientRect();

    const dx = ((pt.clientX - cropTool.startX) / cropTool.imageWidth) * 100;
    const dy = ((pt.clientY - cropTool.startY) / cropTool.imageHeight) * 100;

    let newX = cropTool.startCropX;
    let newY = cropTool.startCropY;
    let newWidth = cropTool.startCropWidth;
    let newHeight = cropTool.startCropHeight;

    const handle = cropTool.handle;

    if (handle.includes('e')) newWidth += dx;
    if (handle.includes('w')) {
        newX += dx;
        newWidth -= dx;
    }
    if (handle.includes('s')) newHeight += dy;
    if (handle.includes('n')) {
        newY += dy;
        newHeight -= dy;
    }

    if (newWidth < 10) newWidth = 10;
    if (newHeight < 10) newHeight = 10;
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + newWidth > 100) newX = 100 - newWidth;
    if (newY + newHeight > 100) newY = 100 - newHeight;

    cropTool.x = newX;
    cropTool.y = newY;
    cropTool.width = newWidth;
    cropTool.height = newHeight;

    updateCropHandlesPosition();
    drawImage();
}

function onCropResizeEnd() {
    cropTool.resizing = false;
    window.removeEventListener('mousemove', onCropResize);
    window.removeEventListener('mouseup', onCropResizeEnd);
    window.removeEventListener('touchmove', onCropResize);
    window.removeEventListener('touchend', onCropResizeEnd);
}

function startCropMove(e) {
    e.preventDefault();
    e.stopPropagation();
    cropTool.moving = true;

    const pt = getEventClient(e);
    cropTool.startX = pt.clientX;
    cropTool.startY = pt.clientY;
    cropTool.startCropX = cropTool.x;
    cropTool.startCropY = cropTool.y;

    window.addEventListener('mousemove', onCropMove);
    window.addEventListener('mouseup', onCropMoveEnd);
    window.addEventListener('touchmove', onCropMove, { passive: false });
    window.addEventListener('touchend', onCropMoveEnd);
}

function onCropMove(e) {
    if (!cropTool.moving) return;
    e.preventDefault();

    const pt = getEventClient(e);
    const rect = canvas.getBoundingClientRect();

    const dx = ((pt.clientX - cropTool.startX) / cropTool.imageWidth) * 100;
    const dy = ((pt.clientY - cropTool.startY) / cropTool.imageHeight) * 100;

    let newX = cropTool.startCropX + dx;
    let newY = cropTool.startCropY + dy;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + cropTool.width > 100) newX = 100 - cropTool.width;
    if (newY + cropTool.height > 100) newY = 100 - cropTool.height;

    cropTool.x = newX;
    cropTool.y = newY;

    updateCropHandlesPosition();
    drawImage();
}

function onCropMoveEnd() {
    cropTool.moving = false;
    window.removeEventListener('mousemove', onCropMove);
    window.removeEventListener('mouseup', onCropMoveEnd);
    window.removeEventListener('touchmove', onCropMove);
    window.removeEventListener('touchend', onCropMoveEnd);
}

function toggleCrop() {
    console.log('🔧 Toggle crop. Current state:', cropTool.active);
    cropTool.active = !cropTool.active;
    console.log('New crop state:', cropTool.active);

    if (cropTool.active) {
        cropTool.x = 0;
        cropTool.y = 0;
        cropTool.width = 100;
        cropTool.height = 100;
        console.log('Crop initialized:', cropTool);
        console.log('Current image position:', {
            x: cropTool.imageX,
            y: cropTool.imageY,
            w: cropTool.imageWidth,
            h: cropTool.imageHeight
        });

        showCropControls();

        setTimeout(() => {
            console.log('Setting up crop handles...');
            setupCropHandles();
        }, 100);
    } else {
        console.log('Removing crop handles');
        removeCropHandles();
        hideCropControls();
    }

    drawImage();
}

function showCropControls() {
    const cropControls = `
        <div class="tool-group">
            <label>Crop Image</label>
            <div class="button-group">
                <button onclick="applyCrop()" class="tool-btn" style="background: #28a745; color: white;">Apply Crop</button>
                <button onclick="cancelCrop()" class="tool-btn" style="background: #dc3545; color: white;">Cancel</button>
            </div>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:0.5rem;">
                Drag corners to resize • Drag inside box to move
            </p>
        </div>
    `;

    const editorTools = document.querySelector('.editor-tools');
    if (editorTools) {
        const existingCropControls = document.getElementById('cropControls');
        if (existingCropControls) existingCropControls.remove();

        const cropDiv = document.createElement('div');
        cropDiv.id = 'cropControls';
        cropDiv.innerHTML = cropControls;
        editorTools.appendChild(cropDiv);
    }
}

function hideCropControls() {
    const cropControls = document.getElementById('cropControls');
    if (cropControls) {
        cropControls.remove();
    }
}

// ============== FIXED APPLY CROP FUNCTION ==============
function applyCrop() {
    if (currentImageIndex === -1 || !cropTool.active) return;

    pushSnapshotForCurrentImage();

    const image = uploadedImages[currentImageIndex];
    const img = new Image();

    img.onload = function () {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        const sx = (cropTool.x / 100) * img.width;
        const sy = (cropTool.y / 100) * img.height;
        const sWidth = (cropTool.width / 100) * img.width;
        const sHeight = (cropTool.height / 100) * img.height;

        tempCanvas.width = sWidth;
        tempCanvas.height = sHeight;

        tempCtx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);

        image.original = tempCanvas.toDataURL();

        cropTool.active = false;
        removeCropHandles();
        hideCropControls();

        drawImage();
        saveCurrentAdjustments();

        setTimeout(() => {
            pushSnapshotForCurrentImage();
            console.log('✅ Crop applied and saved to history');
        }, 100);

        console.log('✅ Crop applied');
    };

    img.src = image.original;
}

function cancelCrop() {
    cropTool.active = false;
    removeCropHandles();
    hideCropControls();
    drawImage();
}

// Text overlay functionality
function toggleTextOverlay() {
    editorFeatures.textOverlay.active = !editorFeatures.textOverlay.active;
    if (editorFeatures.textOverlay.active) {
        showTextControls();
    } else {
        hideTextControls();
    }
    drawImage();
}

function showTextControls() {
    const textControls = `
        <div class="tool-group">
            <label>Text Overlay</label>
            <input type="text" id="textInput" value="Add Text" class="text-input">
            <div class="slider-container">
                <span>Font Size: </span>
                <input type="range" min="10" max="100" value="20" id="textSize">
                <span id="textSizeValue">20px</span>
            </div>
            <div class="slider-container">
                <span>X: </span>
                <input type="range" min="0" max="1000" value="50" id="textX">
                <span id="textXValue">50</span>
            </div>
            <div class="slider-container">
                <span>Y: </span>
                <input type="range" min="0" max="1000" value="50" id="textY">
                <span id="textYValue">50</span>
            </div>
            <input type="color" id="textColor" value="#ffffff">
            <button onclick="updateText()" class="tool-btn">Update Text</button>
        </div>
    `;

    const editorTools = document.querySelector('.editor-tools');
    if (editorTools) {
        const existingTextControls = document.getElementById('textControls');
        if (existingTextControls) existingTextControls.remove();

        const textDiv = document.createElement('div');
        textDiv.id = 'textControls';
        textDiv.innerHTML = textControls;
        editorTools.appendChild(textDiv);

        const textInput = document.getElementById('textInput');
        const textSize = document.getElementById('textSize');
        const textSizeValue = document.getElementById('textSizeValue');
        const textColor = document.getElementById('textColor');
        const textX = document.getElementById('textX');
        const textY = document.getElementById('textY');
        const textXValue = document.getElementById('textXValue');
        const textYValue = document.getElementById('textYValue');

        if (textInput) {
            textInput.value = editorFeatures.textOverlay.text || '';
            textInput.addEventListener('input', function () {
                editorFeatures.textOverlay.text = this.value;
                drawImage();
            });
        }

        if (textSize && textSizeValue) {
            textSize.value = editorFeatures.textOverlay.size || 20;
            textSizeValue.textContent = textSize.value + 'px';
            textSize.addEventListener('input', function () {
                textSizeValue.textContent = this.value + 'px';
                editorFeatures.textOverlay.size = parseInt(this.value);
                drawImage();
            });
        }

        if (textColor) {
            textColor.value = editorFeatures.textOverlay.color || '#ffffff';
            textColor.addEventListener('input', function () {
                editorFeatures.textOverlay.color = this.value;
                drawImage();
            });
        }

        if (textX && textXValue) {
            textX.value = editorFeatures.textOverlay.x || 50;
            textXValue.textContent = textX.value;
            textX.addEventListener('input', function () {
                textXValue.textContent = this.value;
                editorFeatures.textOverlay.x = parseInt(this.value);
                drawImage();
            });
        }

        if (textY && textYValue) {
            textY.value = editorFeatures.textOverlay.y || 50;
            textYValue.textContent = textY.value;
            textY.addEventListener('input', function () {
                textYValue.textContent = this.value;
                editorFeatures.textOverlay.y = parseInt(this.value);
                drawImage();
            });
        }
    }
}

function hideTextControls() {
    const textControls = document.getElementById('textControls');
    if (textControls) {
        textControls.remove();
    }
}

function updateText() {
    drawImage();
}

// Add red-eye reduction simulation
function reduceRedEye() {
    if (currentImageIndex === -1) return;

    alert('Red-eye reduction applied (simulated). In a real app, this would analyze and fix red-eye areas.');

    const image = uploadedImages[currentImageIndex];
    const img = new Image();

    img.onload = function () {
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        tempCanvas.width = img.width;
        tempCanvas.height = img.height;
        tempCtx.drawImage(img, 0, 0);

        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            if (r > 150 && g < 100 && b < 100) {
                data[i] = r * 0.7;
                data[i + 1] = g * 1.1;
                data[i + 2] = b * 1.1;
            }
        }

        tempCtx.putImageData(imageData, 0, 0);

        image.original = tempCanvas.toDataURL();
        drawImage();
        saveCurrentAdjustments();
        pushSnapshotForCurrentImage();
    };

    img.src = image.original;
}

// Add auto-enhance feature
function autoEnhance() {
    if (currentImageIndex === -1) return;

    pushSnapshotForCurrentImage();

    adjustments = {
        brightness: 110,
        contrast: 110,
        saturation: 110,
        rotation: 0,
        flipHorizontal: false,
        flipVertical: false
    };

    updateSliderValues();
    drawImage();
    saveCurrentAdjustments();
    pushSnapshotForCurrentImage();
    alert('Auto-enhance applied!');
}

function saveImage() {
    if (currentImageIndex === -1) {
        alert('Please select an image first.');
        return;
    }

    saveCurrentAdjustments();
    alert('Edits saved successfully!');
}

function downloadImage() {
    if (currentImageIndex === -1) {
        alert('Please select an image first.');
        return;
    }

    const link = document.createElement('a');
    link.download = `edited-${uploadedImages[currentImageIndex].name}`;
    link.href = canvas.toDataURL('image/jpeg', 0.9);
    link.click();
}

// Modal Functions
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeCartModal();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
            closeCartModal();
        }
    });
}

function initPhotoMode() {
    switchPhotoMode('upload');
}

// Login and Authentication Functions
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('isLoggedIn', 'true');

    alert('Login successful! Welcome back.');
    navigateTo('home');
    updateLoginStatus();
}

function handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;

    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('isLoggedIn', 'true');

    alert('Account created successfully! Welcome to FOTOCENTER.');
    navigateTo('home');
    updateLoginStatus();
}

function signUpWithGoogle() {
    alert('Google Sign-Up integration would be implemented here with OAuth.');
    localStorage.setItem('userEmail', 'user@gmail.com');
    localStorage.setItem('isLoggedIn', 'true');
    updateLoginStatus();
}

function updateLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginLink = document.querySelector('.login-link');

    if (isLoggedIn && loginLink) {
        loginLink.textContent = 'Log out';
        loginLink.onclick = function () {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            updateLoginStatus();
            navigateTo('home');
            return false;
        };
    } else if (loginLink) {
        loginLink.textContent = 'Log in';
        loginLink.onclick = function () {
            openLoginModal();  
            return false;
        };
    }
}

// FAQ Functions
function selectFaqQuestion(type) {
    let question = '';
    let answer = '';

    switch (type) {
        case 'pricing':
            question = 'What are your prices?';
            answer = chatAI.getResponse('pricing');
            break;
        case 'delivery':
            question = 'How long does delivery take?';
            answer = chatAI.getResponse('delivery');
            break;
        case 'upload':
            question = 'How do I upload photos?';
            answer = chatAI.getResponse('upload');
            break;
        case 'quality':
            question = 'What is your print quality like?';
            answer = chatAI.getResponse('quality');
            break;
        case 'editing':
            question = 'Can I edit my photos?';
            answer = chatAI.getResponse('editing');
            break;
        case 'payment':
            question = 'What payment methods do you accept?';
            answer = chatAI.getResponse('payment');
            break;
        case 'sizes':
            question = 'What sizes do you offer?';
            answer = chatAI.getResponse('sizes');
            break;
        case 'refund':
            question = 'What is your refund policy?';
            answer = chatAI.getResponse('refund');
            break;
    }

    addMessage(question, 'user');

    setTimeout(() => {
        addMessage(answer, 'bot');
    }, 500);
}

// Setup FAQ scroll functionality
function setupFaqScroll() {
    const faqScrollContainer = document.querySelector('.faq-scroll-container');
    const leftIndicator = document.querySelector('.faq-scroll-indicator.left');
    const rightIndicator = document.querySelector('.faq-scroll-indicator.right');

    if (!faqScrollContainer || !leftIndicator || !rightIndicator) return;

    function updateIndicators() {
        const scrollLeft = faqScrollContainer.scrollLeft;
        const maxScroll = faqScrollContainer.scrollWidth - faqScrollContainer.clientWidth;

        leftIndicator.style.opacity = scrollLeft > 0 ? '1' : '0';
        rightIndicator.style.opacity = scrollLeft < maxScroll - 1 ? '1' : '0';
    }

    leftIndicator.addEventListener('click', () => {
        faqScrollContainer.scrollBy({ left: -100, behavior: 'smooth' });
    });

    rightIndicator.addEventListener('click', () => {
        faqScrollContainer.scrollBy({ left: 100, behavior: 'smooth' });
    });

    faqScrollContainer.addEventListener('scroll', updateIndicators);

    setTimeout(updateIndicators, 100);
}

// ============== CALENDAR FUNCTIONS ==============
function switchCalendarsMode(mode) {
    const uploadBtn = document.getElementById('calendarsUploadModeBtn');
    const productsBtn = document.getElementById('calendarsProductsModeBtn');
    const uploadView = document.getElementById('calendarsUploadView');
    const productsView = document.getElementById('calendarsProductsView');

    if (mode === 'upload') {
        uploadBtn.classList.add('active');
        productsBtn.classList.remove('active');
        uploadView.style.display = 'block';
        productsView.style.display = 'none';
    } else {
        uploadBtn.classList.remove('active');
        productsBtn.classList.add('active');
        uploadView.style.display = 'none';
        productsView.style.display = 'block';
        displayCalendarProducts();
    }
}

function initializeCalendarPreview() {
    const monthGrid = document.querySelector('.calendar-month-grid');
    if (!monthGrid) return;

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    monthGrid.innerHTML = months.map(month => `
        <div class="calendar-month" onclick="selectCalendarMonth('${month}')">
            <div class="month-name">${month}</div>
            <div class="month-image">📷</div>
        </div>
    `).join('');

    setupCalendarUpload();
    updateCalendarPrice();
}

function setupCalendarUpload() {
    const dropArea = document.getElementById('calendarsDropArea');
    const fileInput = document.getElementById('calendarsPhotoInput');

    if (!dropArea || !fileInput) return;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropArea.classList.add('drag-over');
    }

    function unhighlight() {
        dropArea.classList.remove('drag-over');
    }

    dropArea.addEventListener('drop', handleCalendarDrop, false);
    fileInput.addEventListener('change', handleCalendarFileSelect, false);
}

function handleCalendarFileSelect(e) {
    const files = e.target.files;
    processCalendarFiles(files);
}

function handleCalendarDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    processCalendarFiles(files);
}

function processCalendarFiles(files) {
    Array.from(files).forEach((file, index) => {
        if (file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                addCalendarImageToGallery(e.target.result, file.name, index);
            };
            reader.readAsDataURL(file);
        }
    });
}

function addCalendarImageToGallery(dataUrl, filename, index) {
    const image = new Image();
    image.onload = function () {
        calendarImages.push({
            id: Date.now() + Math.random(),
            src: dataUrl,
            name: filename,
            monthIndex: index % 12
        });

        updateCalendarImageGallery();
        updateCalendarUploadCount();

        if (index < 12) {
            updateMonthPreview(index, dataUrl);
        }
    };
    image.src = dataUrl;
}

function updateCalendarImageGallery() {
    const container = document.getElementById('calendarsUploadedImages');
    if (!container) return;

    container.innerHTML = calendarImages.map((image, index) => `
        <div class="uploaded-thumbnail ${index === calendarCurrentImageIndex ? 'active' : ''}" 
             onclick="selectCalendarImage(${index})">
            <img src="${image.src}" alt="${image.name}">
            <div class="thumb-overlay">
                <span class="thumb-name">Month ${(image.monthIndex + 1)} - ${image.name.substring(0, 10)}...</span>
            </div>
        </div>
    `).join('');
}

function selectCalendarImage(index) {
    calendarCurrentImageIndex = index;
    updateCalendarImageGallery();
}

function updateCalendarUploadCount() {
    const countElement = document.getElementById('calendarsUploadCount');
    if (countElement) {
        countElement.textContent = calendarImages.length;
    }
}

function updateMonthPreview(monthIndex, imageUrl) {
    const months = document.querySelectorAll('.calendar-month');
    if (months[monthIndex]) {
        const monthImage = months[monthIndex].querySelector('.month-image');
        if (monthImage) {
            monthImage.innerHTML = `<img src="${imageUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
            monthImage.style.background = 'none';
        }
    }
}

function selectCalendarMonth(monthName) {
    alert(`Selected ${monthName}. You can upload a photo for this month.`);
}

function updateCalendarPrice() {
    const calendarType = document.getElementById('calendarType').value;
    const size = document.getElementById('calendarSize').value;
    const paperType = document.getElementById('paperType').value;
    const bindingType = document.getElementById('bindingType').value;
    const quantity = parseInt(document.getElementById('calendarQuantity').value) || 1;

    const basePrices = {
        'desk': 800,
        'wall': 650,
        'mini': 350,
        'photo': 900
    };

    let basePrice = basePrices[calendarType] || 800;

    const sizeAdjustments = {
        '8x10': 0,
        '12x12': 200,
        '8.5x11': 100,
        '11x17': 300
    };

    basePrice += sizeAdjustments[size] || 0;

    const paperAdjustments = {
        'glossy': 0,
        'matte': 100,
        'premium': 200
    };

    basePrice += paperAdjustments[paperType] || 0;

    const bindingAdjustments = {
        'spiral': 0,
        'wire': 50,
        'hardcover': 300
    };

    basePrice += bindingAdjustments[bindingType] || 0;

    const optionsPrice = (sizeAdjustments[size] || 0) +
        (paperAdjustments[paperType] || 0) +
        (bindingAdjustments[bindingType] || 0);

    const totalPrice = basePrice * quantity;

    document.getElementById('basePrice').textContent = `₱ ${(basePrice - optionsPrice).toFixed(2)}`;
    document.getElementById('optionsPrice').textContent = `₱ ${optionsPrice.toFixed(2)}`;
    document.getElementById('calendarTotalPrice').textContent = `₱ ${totalPrice.toFixed(2)}`;
    document.getElementById('calendarFinalPrice').textContent = `₱ ${totalPrice.toFixed(2)}`;

    return totalPrice;
}

function updateCalendarQuantity(change) {
    const quantityInput = document.getElementById('calendarQuantity');
    let quantity = parseInt(quantityInput.value) || 1;
    quantity = Math.max(1, quantity + change);
    quantityInput.value = quantity;
    updateCalendarPrice();
}

function updateCalendarPreview() {
    updateCalendarPrice();
}

function displayCalendarProducts() {
    const grid = document.getElementById('calendarsProductsGrid');
    if (!grid) return;

    const groupedCalendars = {};
    calendarProducts.forEach(product => {
        if (!groupedCalendars[product.type]) {
            groupedCalendars[product.type] = [];
        }
        groupedCalendars[product.type].push(product);
    });

    let html = '';

    Object.keys(groupedCalendars).forEach(type => {
        const typeName = getCalendarTypeName(type);
        html += `
            <div class="calendar-type-section">
                <h3 style="margin: 2rem 0 1rem 0; color: var(--text); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">${typeName}</h3>
                <div class="calendar-samples">
        `;

        groupedCalendars[type].forEach(product => {
            html += `
                <div class="calendar-product-card">
                    ${product.badge ? `<div class="calendar-badge">${product.badge}</div>` : ''}
                    <div class="calendar-product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=Calendar+Image'">
                    </div>
                    <div class="calendar-product-info">
                        <h3>${product.name}</h3>
                        <div class="calendar-product-type">
                            <span>📅 ${typeName}</span>
                        </div>
                        <p class="calendar-product-desc">${product.description}</p>
                        <div class="calendar-features">
                            ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                        </div>
                        <div class="calendar-product-footer">
                            <span class="calendar-price">${product.price}</span>
                            <button class="calendar-add-btn" onclick="addCalendarProductToCart(${product.id})">
                                <span>🛒</span>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

function getCalendarTypeName(type) {
    const typeNames = {
        'desk': 'Desk Calendars',
        'wall': 'Wall Calendars',
        'mini': 'Mini Calendars',
        'photo': 'Photo Calendars'
    };
    return typeNames[type] || 'Calendars';
}

function addCalendarProductToCart(productId) {
    const product = calendarProducts.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
        id: productId,
        type: 'calendar',
        productType: 'calendar',
        productName: product.name,
        name: product.name,
        image: product.image,
        price: product.price,
        productType: product.type,
        quantity: 1,
        selected: true,
        sizeMode: 'fill',
        photoCount: 1,
        photos: [{ thumbnail: product.image, name: product.name }]
    };

    addToCart(cartItem);
    showSuccessModal();
}

function addCustomCalendarToCart() {
    if (calendarImages.length === 0) {
        alert('Please upload at least one photo for your calendar.');
        return;
    }

    const calendarType = document.getElementById('calendarType').value;
    const size = document.getElementById('calendarSize').value;
    const paperType = document.getElementById('paperType').value;
    const bindingType = document.getElementById('bindingType').value;
    const startMonth = document.getElementById('startMonth').value;
    const quantity = parseInt(document.getElementById('calendarQuantity').value) || 1;
    const totalPrice = updateCalendarPrice();

    const cartItem = {
        id: 'custom-calendar-' + Date.now(),
        type: 'custom-calendar',
        productType: 'calendar',
        productName: `Custom ${getCalendarTypeName(calendarType)}`,
        name: `Custom ${getCalendarTypeName(calendarType)} (${size})`,
        displayImage: calendarImages[0]?.src,
        price: `₱ ${totalPrice.toFixed(2)}`,
        size: size,
        paperType: paperType,
        sizeMode: 'fill',
        photoCount: calendarImages.length,
        photos: calendarImages.map(img => ({
            thumbnail: img.src,
            name: img.name
        })),
        quantity: quantity,
        selected: true
    };

    addToCart(cartItem);
    showSuccessModal();
}

function viewCalendarSample(productId) {
    const product = calendarProducts.find(p => p.id === productId);
    if (!product) return;

    alert(`Preview of ${product.name}. In a full implementation, this would show a detailed preview modal.`);
}

function getCalendarBestFor(type) {
    const bestFor = {
        'desk': 'Office desks, home offices',
        'wall': 'Home decoration, kitchens, offices',
        'mini': 'Refrigerators, wallets, small spaces',
        'photo': 'Gifts, family memories, special occasions'
    };
    return bestFor[type] || 'General use';
}

// For Cards section (simplified version of the photo editor)
function switchCardsMode(mode) {
    const uploadBtn = document.getElementById('cardsUploadModeBtn');
    const productsBtn = document.getElementById('cardsProductsModeBtn');
    const uploadView = document.getElementById('cardsUploadView');
    const productsView = document.getElementById('cardsProductsView');

    if (mode === 'upload') {
        uploadBtn.classList.add('active');
        productsBtn.classList.remove('active');
        uploadView.style.display = 'block';
        productsView.style.display = 'none';
    } else {
        uploadBtn.classList.remove('active');
        productsBtn.classList.add('active');
        uploadView.style.display = 'none';
        productsView.style.display = 'block';
        displayCardsProducts();
    }
}

function displayCardsProducts() {
    const grid = document.getElementById('cardsProductsGrid');
    if (!grid) return;

    const cardProducts = [
        { id: 101, name: "Standard Photo Card", price: "₱150", image: "https://i5.walmartimages.com/seo/48-Pack-Photo-Frame-Cards-with-Envelopes-Notecards-for-4x6-Picture-Insert-Ivory_5339c47e-9e2e-4d17-bbcc-46da7d0288fb.88480b050f2d7e488cd5a07e5e90cfb5.jpeg", description: "5x7 inch photo card with envelope" },
        { id: 102, name: "Premium Photo Card", price: "₱250", image: "https://framkallning.fotocenter.se/templates2/categories/FOLDEDCARDS/mobile_image.png", description: "8x10 inch premium card with matte finish" },
        { id: 103, name: "Folded Greeting Card", price: "₱350", image: "https://th.bing.com/th/id/OIP.2JQJy-hTVtAdeD9wR7SFZgHaHa?w=188&h=188&c=7&r=0&o=7&pid=1.7&rm=3", description: "Folded card with multiple photo slots" },
        { id: 104, name: "Holiday Card Pack", price: "₱600", image: "https://th.bing.com/th/id/OIP.qtYORFPfMvfnjzqE2NZ7bQHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3", description: "Pack of 10 holiday-themed cards" }
    ];

    grid.innerHTML = cardProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Image+Not+Found'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="price">${product.price}</span>
                    <button class="add-btn" onclick="addToCartProduct(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Simplified card editor functions
function adjustCardsBrightness(amount) {
    alert('Card editor would work similarly to photo editor. Full implementation would be similar to adjustBrightness()');
}

function adjustCardsContrast(amount) {
    alert('Card editor function placeholder');
}

function adjustCardsSaturation(amount) {
    alert('Card editor function placeholder');
}

function rotateCardsImage(degrees) {
    alert('Card editor function placeholder');
}

function flipCardsHorizontal() {
    alert('Card editor function placeholder');
}

function flipCardsVertical() {
    alert('Card editor function placeholder');
}

function applyCardsFilter(filter) {
    alert('Card editor function placeholder');
}

function resetCardsImage() {
    alert('Card editor function placeholder');
}

function saveCardsImage() {
    alert('Card editor function placeholder');
}

function downloadCardsImage() {
    alert('Card editor function placeholder');
}

function addCardsToCart() {
    const selectedSize = document.querySelector('input[name="cardsSize"]:checked');
    if (!selectedSize) {
        alert('Please select a card size.');
        return;
    }

    const size = selectedSize.value;
    const price = getCardPriceForSize(size);

    const cartItem = {
        id: 'card-' + Date.now(),
        type: 'card',
        productType: 'photocards',
        productName: 'Photo Card',
        name: `Photo Card (${size})`,
        image: 'https://via.placeholder.com/200x150?text=Photo+Card',
        price: `₱ ${price.toFixed(2)}`,
        size: size,
        quantity: 1,
        selected: true,
        sizeMode: 'fill',
        photoCount: 1,
        photos: [{ thumbnail: 'https://via.placeholder.com/200x150?text=Photo+Card', name: 'Photo Card' }]
    };

    addToCart(cartItem);
}

function getCardPriceForSize(size) {
    const prices = {
        '5x7': 150.00,
        '8x10': 250.00,
        'folded': 350.00
    };
    return prices[size] || 150.00;
}

// ============== SEARCH BAR FUNCTIONS ==============

// Store last search query
let lastSearchQuery = localStorage.getItem('lastSearch') || 'canvas prints...';

// Initialize search bar
function initSearchBar() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    // Set placeholder to last search
    searchInput.placeholder = lastSearchQuery;
    
    // Handle Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = this.value.trim();
            if (query) {
                performSearch(query);
            } else {
                // If empty, just go to shop
                navigateTo('shop');
            }
        }
    });
    
    // Handle search icon click
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        });
    }
    
    console.log('Search bar initialized'); // Debug
}

// Perform search
function performSearch(query) {
    console.log('Performing search for:', query); // Debug
    
    if (!query) return;
    
    // Save to localStorage
    localStorage.setItem('lastSearch', query);
    document.getElementById('searchInput').placeholder = query;
    
    // Navigate to shop page
    navigateTo('shop');
    
    // Small delay to ensure shop page is loaded
    setTimeout(() => {
        filterProducts(query);
    }, 300);
}

// Filter products based on search query
function filterProducts(query) {
    console.log('Filtering products for:', query); // Debug
    
    const shopGrid = document.getElementById('shopProductsGrid');
    if (!shopGrid) {
        console.log('Shop grid not found');
        return;
    }
    
    // Make sure products are rendered
    if (!shopGrid.hasChildNodes() || shopGrid.children.length === 0) {
        console.log('No products in grid, rendering first...');
        renderShopProducts();
        setTimeout(() => filterProducts(query), 200);
        return;
    }
    
    const productCards = shopGrid.querySelectorAll('.product-card');
    console.log('Found', productCards.length, 'product cards');
    
    if (productCards.length === 0) return;
    
    const searchTerm = query.toLowerCase();
    let matchCount = 0;
    
    // Remove any existing no-results message
    const existingNoResults = shopGrid.querySelector('.no-results-message');
    if (existingNoResults) existingNoResults.remove();
    
    // Show search results info
    const searchInfo = document.getElementById('searchResultsInfo');
    const searchText = document.getElementById('searchResultsText');
    
    if (searchInfo && searchText) {
        searchInfo.style.display = 'flex';
    }
    
    // Loop through all product cards
    productCards.forEach(card => {
        const title = card.querySelector('h3, h4')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('.product-desc, p')?.textContent.toLowerCase() || '';
        const priceText = card.querySelector('.price')?.textContent.toLowerCase() || '';
        
        // Check if search term matches
        if (title.includes(searchTerm) || desc.includes(searchTerm) || priceText.includes(searchTerm)) {
            // Match found - highlight
            card.classList.add('search-highlight');
            card.classList.remove('search-dim');
            matchCount++;
            console.log('Match found:', title); // Debug
        } else {
            // No match - dim with blur
            card.classList.add('search-dim');
            card.classList.remove('search-highlight');
        }
    });
    
    console.log('Total matches:', matchCount); // Debug
    
    // Update results count
    if (searchText) {
        searchText.innerHTML = `Found <span>${matchCount}</span> result${matchCount !== 1 ? 's' : ''} for: <span>"${query}"</span>`;
    }
    
    // If no matches, show message
    if (matchCount === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text);">😕 No products found</h3>
                <p>Try searching for: photo cards, calendar, canvas, photo book, mouse pads, double cards</p>
            </div>
        `;
        shopGrid.appendChild(noResults);
    }
}

// Clear search
function clearSearch() {
    console.log('Clearing search'); // Debug
    
    const shopGrid = document.getElementById('shopProductsGrid');
    if (!shopGrid) return;
    
    // Remove search classes
    shopGrid.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('search-highlight', 'search-dim');
    });
    
    // Remove no-results message
    const noResults = shopGrid.querySelector('.no-results-message');
    if (noResults) noResults.remove();
    
    // Hide search info
    const searchInfo = document.getElementById('searchResultsInfo');
    if (searchInfo) {
        searchInfo.style.display = 'none';
    }
    
    // Clear input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
}

// Make functions globally available
window.performSearch = performSearch;
window.clearSearch = clearSearch;

// ============== FIXED GOOGLE DRIVE ORDER PROCESSING ==============

// Google Drive Configuration
const CLIENT_ID = '758191937461-epcuq05oanl0cq8oedgj5pt32h79nojr.apps.googleusercontent.com';
const API_KEY = 'AIzaSyA0_S5lH8BwyvekzmG2s5qxt0_MAmLKOiM';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

// Order tracking
let tokenClient;
let gapiInited = false;
let gisInited = false;
let rootFolderId = null;

// Initialize Google API
function initializeGoogleApi() {
    gapi.load('client', async () => {
        await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: DISCOVERY_DOCS,
        });
        gapiInited = true;
        maybeEnableButtons();
    });

    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',
    });
    gisInited = true;
    maybeEnableButtons();
}

function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        document.getElementById('completeOrderBtn').disabled = false;
    }
}

// Helper: Convert base64 to binary blob
function base64ToBlob(base64, mimeType) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], {type: mimeType});
}

// Find or create the C8FOCENTER/orders folder structure
async function getOrCreateOrdersFolder() {
    try {
        const response = await gapi.client.drive.files.list({
            q: "name='C8FOCENTER' and mimeType='application/vnd.google-apps.folder' and trashed=false",
            fields: 'files(id, name)',
            spaces: 'drive'
        });
        
        let c8Folder;
        if (response.result.files.length > 0) {
            c8Folder = response.result.files[0];
        } else {
            c8Folder = await createDriveFolder('C8FOCENTER');
        }
        
        const ordersResponse = await gapi.client.drive.files.list({
            q: `name='orders' and '${c8Folder.id}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
            fields: 'files(id, name)',
            spaces: 'drive'
        });
        
        if (ordersResponse.result.files.length > 0) {
            return ordersResponse.result.files[0].id;
        } else {
            const ordersFolder = await createDriveFolder('orders', c8Folder.id);
            return ordersFolder.id;
        }
    } catch (error) {
        console.error('Error finding/creating orders folder:', error);
        throw error;
    }
}

// Create folder in Google Drive
async function createDriveFolder(folderName, parentId = null) {
    const metadata = {
        name: folderName,
        mimeType: 'application/vnd.google-apps.folder'
    };
    if (parentId) {
        metadata.parents = [parentId];
    }
    
    const response = await gapi.client.drive.files.create({
        resource: metadata,
        fields: 'id, name'
    });
    
    return response.result;
}

// Upload file to Google Drive
async function uploadFileToDrive(fileName, content, folderId) {
    const boundary = '-------' + Date.now();
    const delimiter = '\r\n--' + boundary + '\r\n';
    const closeDelimiter = '\r\n--' + boundary + '--';
    
    let contentType;
    let bodyContent;
    
    if (fileName.endsWith('.jpg')) {
        contentType = 'image/jpeg';
        const blob = base64ToBlob(content, 'image/jpeg');
        bodyContent = blob;
    } else {
        contentType = 'text/plain';
        bodyContent = content;
    }
    
    const metadata = {
        name: fileName,
        mimeType: contentType,
        parents: [folderId]
    };
    
    if (fileName.endsWith('.jpg')) {
        const form = new FormData();
        form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        form.append('file', bodyContent);
        
        const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
            method: 'POST',
            headers: new Headers({ 'Authorization': 'Bearer ' + gapi.client.getToken().access_token }),
            body: form
        });
        
        return await response.json();
    } else {
        const multipartRequestBody = 
            delimiter +
            'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
            JSON.stringify(metadata) +
            delimiter +
            'Content-Type: ' + contentType + '\r\n\r\n' +
            bodyContent +
            closeDelimiter;
        
        const response = await gapi.client.request({
            path: '/upload/drive/v3/files',
            method: 'POST',
            params: { uploadType: 'multipart' },
            headers: { 'Content-Type': 'multipart/related; boundary="' + boundary + '"' },
            body: multipartRequestBody
        });
        
        return response.result;
    }
}

// Generate Condition.txt
function generateConditionFile(orderData) {
    let content = `[OutDevice]\n    DeviceName= SP-1500sRGB\n\n`;
    content += `[ImageList]\n    ImageCnt=${orderData.photos.length}\n`;
    
    orderData.photos.forEach((photo, index) => {
        content += `    ${index+1}=${index+1}.jpg\n`;
    });
    
    orderData.photos.forEach((photo, index) => {
        content += `\n[${index+1}.jpg]\n`;
        content += `    SizeName=${photo.size || '102C'}\n`;
        content += `    PrintCnt=${photo.quantity || 1}\n`;
        content += `    BackPrint=FILE\n`;
        content += `    BackPrintLine2=${orderData.orderId}\n`;
        content += `    Resize=${photo.resize || 'FITIN'}\n`;
        content += `    DSC_Chk=FALSE\n`;
    });
    
    return content;
}

// Generate End.txt
function generateEndFile(orderData) {
    return `[Order Complete]
    OrderID=${orderData.orderId}
    Username=${orderData.username}
    OrderCount=${orderData.orderCount}
    TotalPhotos=${orderData.photos.length}
    Timestamp=${new Date().toLocaleString()}
    Status=READY_FOR_PRINT
    `;
}

// Generate OrderReceipt.txt
function generateReceiptFile(orderData) {
    const filenameCount = {};
    
    let receipt = "=".repeat(60) + "\n";
    receipt += "                    FOTOCENTER ORDER RECEIPT\n";
    receipt += "=".repeat(60) + "\n\n";
    receipt += `Order ID: ${orderData.orderId}\n`;
    receipt += `Customer: ${orderData.username}\n`;
    receipt += `Date: ${new Date().toLocaleString()}\n`;
    receipt += `Order #: ${orderData.orderCount}\n\n`;
    
    receipt += "-".repeat(60) + "\n";
    receipt += "Item                          Price    Size       Paper Type\n";
    receipt += "-".repeat(60) + "\n";
    
    let totalAmount = 0;
    
    orderData.photos.forEach((photo, index) => {
        let displayName = photo.originalName || `Photo_${index + 1}`;
        if (filenameCount[displayName]) {
            filenameCount[displayName]++;
            const nameParts = displayName.split('.');
            if (nameParts.length > 1) {
                displayName = nameParts[0] + '_' + filenameCount[displayName] + '.' + nameParts[1];
            } else {
                displayName = displayName + '_' + filenameCount[displayName];
            }
        } else {
            filenameCount[displayName] = 1;
        }
        
        if (displayName.length > 25) {
            displayName = displayName.substring(0, 22) + "...";
        }
        
        let sizeDisplay = photo.size || '4x6';
        if (photo.isCustom) {
            sizeDisplay = `${photo.customWidth}x${photo.customHeight} ${photo.customUnit}`;
        }
        
        let paperType = photo.paperType || 'Standard';
        if (paperType === 'glossy') paperType = 'Glossy';
        if (paperType === 'matte') paperType = 'Matte';
        
        const price = parseFloat(photo.price || 25) * (photo.quantity || 1);
        totalAmount += price;
        
        const line = `${displayName.padEnd(25)} ₱${price.toFixed(2).padStart(7)} ${sizeDisplay.padEnd(10)} ${paperType}`;
        receipt += line + "\n";
    });
    
    receipt += "-".repeat(60) + "\n";
    receipt += `\nTotal Amount: ₱${totalAmount.toFixed(2)}\n`;
    receipt += `Total Items: ${orderData.photos.length}\n\n`;
    receipt += "=".repeat(60) + "\n";
    receipt += "Thank you for choosing FOTOCENTER!\n";
    receipt += "=".repeat(60) + "\n";
    
    return receipt;
}

// Get user's order count
function getUserOrderCount(username) {
    const key = `orderCount_${username}`;
    let count = parseInt(localStorage.getItem(key) || '0');
    count++;
    localStorage.setItem(key, count.toString());
    return count;
}

// Generate unique order ID
function generateOrderId() {
    return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
}

// Initialize Google API on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeGoogleApi();
    
    const orderBtn = document.getElementById('completeOrderBtn');
    if (orderBtn) orderBtn.disabled = true;
});

// Make functions globally available
window.initializeGoogleApi = initializeGoogleApi;

// ============== COPY ORDER NUMBER FUNCTION ==============
function copyOrderNumber() {
    const orderMessage = document.getElementById('orderSuccessMessage').innerText;
    const match = orderMessage.match(/Order Number: ([^\n]+)/);
    if (match && match[1]) {
        const orderNumber = match[1].trim();
        navigator.clipboard.writeText(orderNumber).then(() => {
            const copyBtn = document.querySelector('.copy-btn');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '✅ Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Press Ctrl+C to copy the order number');
        });
    }
}

// Make function globally available
window.copyOrderNumber = copyOrderNumber;

// ============== CART PAGE FUNCTIONS ==============

// Initialize select all checkbox
function initSelectAll() {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            shoppingCart.forEach(item => {
                item.selected = this.checked;
            });
            updateCartSelection();
            renderCartPage();
        });
    }
}

// Render cart page items with photo count badge and clickable preview
function renderCartPage() {
    const container = document.getElementById('cartItemsContainer');
    if (!container) return;
    
    if (shoppingCart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <p>Your cart is empty</p>
                <button onclick="navigateTo('shop')">Continue Shopping</button>
            </div>
        `;
        const selectAllBar = document.getElementById('selectAllBar');
        const stickyBottom = document.getElementById('cartStickyBottom');
        if (selectAllBar) selectAllBar.style.display = 'none';
        if (stickyBottom) stickyBottom.style.display = 'none';
        document.getElementById('totalCount').textContent = '0';
        document.getElementById('selectedCount').textContent = '0';
        document.getElementById('selectedItemsCount').textContent = '0';
        document.getElementById('cartTotalSelected').textContent = '₱0.00';
        return;
    }
    
    const selectAllBar = document.getElementById('selectAllBar');
    const stickyBottom = document.getElementById('cartStickyBottom');
    if (selectAllBar) selectAllBar.style.display = 'flex';
    if (stickyBottom) stickyBottom.style.display = 'flex';
    document.getElementById('totalCount').textContent = shoppingCart.length;
    
    let html = '';
    shoppingCart.forEach((item, index) => {
        let sizeModeDisplay = '';
        if (item.sizeMode) {
            sizeModeDisplay = item.sizeMode === 'fill' ? 'Fill' : 'Fit';
        } else {
            sizeModeDisplay = 'Fill';
        }
        
        const photoCount = item.photoCount || 1;
        const hasMultiplePhotos = photoCount > 1;
        const additionalPhotos = photoCount - 1;
        
        html += `
            <div class="cart-item-card" data-index="${index}">
                <div class="cart-item-checkbox">
                    <input type="checkbox" class="item-checkbox" data-index="${index}" ${item.selected ? 'checked' : ''}>
                </div>
                <div class="cart-item-image" onclick="showPhotoPreview(${index})" style="cursor: pointer; position: relative;">
                    <img src="${item.displayImage || item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100?text=Image'">
                    ${hasMultiplePhotos ? `
                        <div style="position: absolute; bottom: 5px; right: 5px; background: rgba(0,0,0,0.7); color: white; padding: 2px 6px; border-radius: 12px; font-size: 12px; font-weight: bold;">
                            +${additionalPhotos} more
                        </div>
                    ` : ''}
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.productName || item.name}</div>
                    <div class="cart-item-specs">
                        ${item.size ? `<span>Size: ${item.size}</span>` : ''}
                        ${item.paperType ? `<span>Paper: ${item.paperType}</span>` : ''}
                        <span>Mode: ${sizeModeDisplay}</span>
                        ${hasMultiplePhotos ? `<span>📸 ${photoCount} photos</span>` : ''}
                    </div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-actions">
                        <div class="cart-item-quantity">
                            <button onclick="updateCartItemQuantityFromCart(${index}, -1)">−</button>
                            <span>${item.quantity || 1}</span>
                            <button onclick="updateCartItemQuantityFromCart(${index}, 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    document.querySelectorAll('.item-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const index = this.dataset.index;
            shoppingCart[index].selected = this.checked;
            updateCartSelection();
        });
    });
    
    shoppingCart.forEach(item => {
        if (item.selected === undefined) item.selected = true;
    });
    
    updateCartSelection();
}

// ============== PHOTO PREVIEW MODAL ==============

// Show photo preview modal for a cart item
function showPhotoPreview(itemIndex) {
    const item = shoppingCart[itemIndex];
    
    if (!item || !item.photos || item.photos.length === 0) {
        alert('No photos to preview');
        return;
    }
    
    let previewModal = document.getElementById('photoPreviewModal');
    if (!previewModal) {
        previewModal = document.createElement('div');
        previewModal.id = 'photoPreviewModal';
        previewModal.className = 'modal';
        previewModal.innerHTML = `
            <div class="modal-content" style="max-width: 800px; width: 90%; background: white; border-radius: 12px; padding: 20px;">
                <span class="close-modal" onclick="closePhotoPreview()">&times;</span>
                <h3 style="margin-bottom: 20px; text-align: center;" id="previewModalTitle">Photo Preview</h3>
                
                <div style="position: relative; min-height: 400px; display: flex; align-items: center; justify-content: center; background: #f5f5f5; border-radius: 8px; margin-bottom: 20px;">
                    <button onclick="prevPreviewPhoto()" style="position: absolute; left: 10px; background: rgba(0,0,0,0.5); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 20px; display: flex; align-items: center; justify-content: center; z-index: 10;">◀</button>
                    
                    <img id="previewMainImage" src="" alt="Preview" style="max-width: 100%; max-height: 500px; object-fit: contain; border-radius: 4px;">
                    
                    <button onclick="nextPreviewPhoto()" style="position: absolute; right: 10px; background: rgba(0,0,0,0.5); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 20px; display: flex; align-items: center; justify-content: center; z-index: 10;">▶</button>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <span id="previewCounter" style="font-weight: 600; color: var(--accent);">1 / 1</span>
                    <button onclick="closePhotoPreview()" style="background: var(--accent); color: white; border: none; padding: 8px 24px; border-radius: 4px; cursor: pointer; font-weight: 600;">Close</button>
                </div>
                
                <div id="previewThumbnails" style="display: flex; gap: 10px; overflow-x: auto; padding: 10px 0;">
                </div>
            </div>
        `;
        document.body.appendChild(previewModal);
    }
    
    window.currentPreviewItemIndex = itemIndex;
    window.currentPreviewPhotoIndex = 0;
    window.currentPreviewPhotos = item.photos;
    
    document.getElementById('previewModalTitle').textContent = 
        `${item.productName || 'Photo'} - ${item.photos.length} photos`;
    
    updatePreviewMainImage();
    
    const thumbnailsContainer = document.getElementById('previewThumbnails');
    thumbnailsContainer.innerHTML = item.photos.map((photo, idx) => {
        let imgSrc = photo.thumbnail || photo;
        return `
            <div onclick="jumpToPreviewPhoto(${idx})" style="cursor: pointer; border: ${idx === 0 ? '3px solid var(--accent)' : '2px solid transparent'}; border-radius: 4px; overflow: hidden; width: 60px; height: 60px; flex-shrink: 0;">
                <img src="${imgSrc}" alt="Thumbnail" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        `;
    }).join('');
    
    previewModal.style.display = 'flex';
}

// Update main preview image
function updatePreviewMainImage() {
    const photos = window.currentPreviewPhotos;
    const index = window.currentPreviewPhotoIndex;
    
    if (!photos || photos.length === 0) return;
    
    const mainImage = document.getElementById('previewMainImage');
    const photo = photos[index];
    let imgSrc = photo.thumbnail || photo;
    mainImage.src = imgSrc;
    
    document.getElementById('previewCounter').textContent = 
        `${index + 1} / ${photos.length}`;
    
    const thumbnails = document.querySelectorAll('#previewThumbnails div');
    thumbnails.forEach((thumb, idx) => {
        thumb.style.border = idx === index ? '3px solid var(--accent)' : '2px solid transparent';
    });
}

// Navigate to previous photo
function prevPreviewPhoto() {
    if (window.currentPreviewPhotoIndex > 0) {
        window.currentPreviewPhotoIndex--;
        updatePreviewMainImage();
    }
}

// Navigate to next photo
function nextPreviewPhoto() {
    if (window.currentPreviewPhotoIndex < window.currentPreviewPhotos.length - 1) {
        window.currentPreviewPhotoIndex++;
        updatePreviewMainImage();
    }
}

// Jump to specific photo
function jumpToPreviewPhoto(index) {
    if (index >= 0 && index < window.currentPreviewPhotos.length) {
        window.currentPreviewPhotoIndex = index;
        updatePreviewMainImage();
    }
}

// Close preview modal
function closePhotoPreview() {
    const modal = document.getElementById('photoPreviewModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Update cart selection UI
function updateCartSelection() {
    const selectAll = document.getElementById('selectAllCheckbox');
    const selectedCount = shoppingCart.filter(item => item.selected).length;
    const totalCount = shoppingCart.length;
    
    document.getElementById('selectedCount').textContent = selectedCount;
    document.getElementById('selectedItemsCount').textContent = selectedCount;
    
    if (selectAll) {
        if (totalCount > 0) {
            selectAll.checked = selectedCount === totalCount;
            selectAll.indeterminate = selectedCount > 0 && selectedCount < totalCount;
        } else {
            selectAll.checked = false;
            selectAll.indeterminate = false;
        }
    }
    
    let total = 0;
    shoppingCart.forEach((item) => {
        if (item.selected) {
            const price = parseFloat(item.price.toString().replace('₱', '').replace(',', '')) || 0;
            total += price * (item.quantity || 1);
        }
    });
    
    document.getElementById('cartTotalSelected').textContent = `₱${total.toFixed(2)}`;
}

// Select all items
function selectAllItems(checked) {
    shoppingCart.forEach(item => {
        item.selected = checked;
    });
    updateCartSelection();
    renderCartPage();
}

// Update quantity from cart page
function updateCartItemQuantityFromCart(index, change) {
    updateCartItemQuantity(index, change);
    renderCartPage();
    updateCartHover();
}

// Delete selected items function
function deleteSelectedItems() {
    console.log('🗑️ DeleteSelectedItems called');
    const beforeCount = shoppingCart.length;
    shoppingCart = shoppingCart.filter(item => !item.selected);
    const afterCount = shoppingCart.length;
    console.log(`Removed ${beforeCount - afterCount} items`);
    
    updateCartStorage();
    renderCartPage();
    updateCartUI();
    updateCartHover();
}

// FIXED: Process order from cart - handles multi-photo products
async function processOrderFromCart() {
    const selectedItems = shoppingCart.filter(item => item.selected);
    
    if (selectedItems.length === 0) {
        alert('Please select at least one item to order.');
        return;
    }
    
    const username = localStorage.getItem('userName') || localStorage.getItem('userEmail')?.split('@')[0] || 'guest';
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
        const proceed = confirm('You are not logged in. Continue as guest?');
        if (!proceed) return;
    }
    
    const multiPhotoTypes = ['calendar', 'photobook', 'doublecards'];
    
    const photos = [];
    let photoCounter = 1;

    selectedItems.forEach((item, itemIndex) => {
        const productType = item.productType || item.type;
        const isMultiPhoto = multiPhotoTypes.includes(productType);
        
        if (isMultiPhoto && item.photos && item.photos.length > 0) {
            console.log(`📸 Processing ${item.productName} with ${item.photos.length} photos`);
            
            item.photos.forEach((photo, photoIndex) => {
                let imageData = '';
                
                if (photo.data) {
                    imageData = photo.data;
                } else if (photo.thumbnail) {
                    imageData = photo.thumbnail;
                } else if (typeof photo === 'string') {
                    imageData = photo;
                }
                
                if (imageData && imageData.includes(',')) {
                    imageData = imageData.split(',')[1];
                }
                
                photos.push({
                    originalName: photo.name || `Photo_${photoIndex + 1}.jpg`,
                    filename: `${photoCounter}.jpg`,
                    data: imageData,
                    size: item.size || '4x6',
                    quantity: 1,
                    price: item.basePrice || parseFloat(item.price.toString().replace('₱', '')) / item.photos.length,
                    paperType: item.paperType || 'standard',
                    isCustom: item.isCustom || false,
                    customWidth: item.customDimensions?.width || null,
                    customHeight: item.customDimensions?.height || null,
                    customUnit: item.customDimensions?.unit || 'inches',
                    resize: item.sizeMode || 'FITIN',
                    productType: productType,
                    productName: item.productName
                });
                photoCounter++;
            });
        } else {
            console.log(`🖼️ Processing ${item.name} as single photo product`);
            
            let imageSource = '';
            
            if (item.displayImage) {
                imageSource = item.displayImage;
            } else if (item.image) {
                imageSource = item.image;
            } else if (item.photos && item.photos[0]) {
                const firstPhoto = item.photos[0];
                imageSource = firstPhoto.data || firstPhoto.thumbnail || firstPhoto;
            }
            
            let imageData = '';
            if (imageSource && typeof imageSource === 'string') {
                if (imageSource.includes(',')) {
                    imageData = imageSource.split(',')[1];
                } else {
                    imageData = imageSource;
                }
            }
            
            photos.push({
                originalName: item.originalName || item.name || `item_${itemIndex + 1}.jpg`,
                filename: `${photoCounter}.jpg`,
                data: imageData,
                size: item.size || '4x6',
                quantity: item.quantity || 1,
                price: parseFloat(item.price.toString().replace('₱', '').replace(',', '')) / (item.quantity || 1),
                paperType: item.paperType || 'standard',
                isCustom: item.isCustom || false,
                customWidth: item.customDimensions?.width || null,
                customHeight: item.customDimensions?.height || null,
                customUnit: item.customDimensions?.unit || 'inches',
                resize: item.sizeMode || 'FITIN',
                productType: productType,
                productName: item.productName || item.name
            });
            photoCounter++;
        }
    });
    
    console.log(`📦 Total photos to upload: ${photos.length}`);
    
    const orderData = {
        orderId: generateOrderId(),
        username: username,
        orderCount: getUserOrderCount(username),
        photos: photos,
        timestamp: new Date().toISOString()
    };
    
    const btn = document.getElementById('completeOrderBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Processing Order...';
    btn.disabled = true;
    
    try {
        const token = await new Promise((resolve, reject) => {
            tokenClient.callback = (resp) => {
                if (resp.error !== undefined) {
                    reject(resp);
                }
                resolve(resp);
            };
            tokenClient.requestAccessToken();
        });
        
        const ordersFolderId = await getOrCreateOrdersFolder();
        
        const folderName = `${username}_${orderData.orderCount}_${orderData.orderId}`;
        const mainFolder = await createDriveFolder(folderName, ordersFolderId);
        
        const photosFolder = await createDriveFolder('Photos', mainFolder.id);
        
        for (let i = 0; i < orderData.photos.length; i++) {
            const photo = orderData.photos[i];
            await uploadFileToDrive(
                `${i+1}.jpg`,
                photo.data,
                photosFolder.id
            );
        }
        
        await uploadFileToDrive(
            'Condition.txt',
            generateConditionFile(orderData),
            mainFolder.id
        );
        
        await uploadFileToDrive(
            'End.txt',
            generateEndFile(orderData),
            mainFolder.id
        );
        
        await uploadFileToDrive(
            'OrderReceipt.txt',
            generateReceiptFile(orderData),
            mainFolder.id
        );
        
        shoppingCart = shoppingCart.filter(item => !item.selected);
        updateCartStorage();
        
        const message = `Hello ${username},\n\nThis is your Order Number: ${orderData.orderId} <button class="copy-btn" onclick="copyOrderNumber()" style="background:none; border:none; cursor:pointer; font-size:1.2rem; margin-left:5px;" title="Copy order number">📋</button>\n\nTotal Photos: ${photos.length}\n\nPlease copy and save the Order Number\n\nThank you for choosing FOTOCENTER!`;
        document.getElementById('orderSuccessMessage').innerHTML = message;
        document.getElementById('orderSuccessModal').style.display = 'flex';
        
        renderCartPage();
        updateCartUI();
        updateCartHover();
        
    } catch (error) {
        console.error('Order failed:', error);
        alert('❌ Order failed: ' + (error.error || error.message || 'Unknown error'));
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// ============== CART HOVER DROPDOWN FUNCTIONS ==============

// Initialize cart hover
function initCartHover() {
    const cartWrapper = document.querySelector('.cart-hover-wrapper');
    if (cartWrapper) {
        cartWrapper.addEventListener('mouseenter', function() {
            updateCartHover();
        });
    }
}

// Update cart hover dropdown
function updateCartHover() {
    const dropdown = document.getElementById('cartHoverDropdown');
    if (!dropdown) return;
    
    if (shoppingCart.length === 0) {
        dropdown.innerHTML = '<div class="cart-hover-empty">Your cart is empty</div>';
        return;
    }
    
    let itemsHtml = '<div class="cart-hover-header"><span>Shopping Cart</span><button class="cart-hover-view-cart" onclick="navigateTo(\'cart-page\')">VIEW CART</button></div>';
    itemsHtml += '<div class="cart-hover-items">';
    
    shoppingCart.slice(0, 3).forEach((item, index) => {
        itemsHtml += `
            <div class="cart-hover-item">
                <div class="cart-hover-item-image">
                    <img src="${item.displayImage || item.image}" alt="${item.name}">
                </div>
                <div class="cart-hover-item-details">
                    <div class="cart-hover-item-name">${item.productName || item.name} ${item.photoCount > 1 ? `(${item.photoCount} photos)` : ''}</div>
                    <div class="cart-hover-item-price">${item.price}</div>
                </div>
            </div>
        `;
    });
    
    if (shoppingCart.length > 3) {
        itemsHtml += `<div style="padding: 0.5rem 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">and ${shoppingCart.length - 3} more items</div>`;
    }
    
    itemsHtml += '</div>';
    
    const subtotal = calculateCartTotal();
    itemsHtml += `
        <div class="cart-hover-footer">
            <div class="cart-hover-subtotal">
                <span>Subtotal:</span>
                <span>₱${subtotal.toFixed(2)}</span>
            </div>
            <button class="cart-hover-checkout" onclick="navigateTo('cart-page')">VIEW CART</button>
        </div>
    `;
    
    dropdown.innerHTML = itemsHtml;
}

// Force update cart hover on any cart change
function forceCartUpdate() {
    updateCartUI();
    updateCartHover();
    if (document.getElementById('cart-page')?.classList.contains('active')) {
        renderCartPage();
    }
}

// ============== HAMBURGER MENU FUNCTIONALITY (TASK 3) ==============

document.addEventListener('DOMContentLoaded', function() {
    setupHamburgerMenu();
});

function setupHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const hamburgerDropdown = document.getElementById('hamburgerDropdown');
    
    if (!hamburgerMenu || !hamburgerIcon || !hamburgerDropdown) return;
    
    // Toggle menu on icon click
    hamburgerIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburgerMenu.classList.toggle('open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburgerMenu.contains(e.target)) {
            hamburgerMenu.classList.remove('open');
        }
    });
    
    // Close menu when mouse leaves dropdown (with delay)
    let timeoutId;
    
    hamburgerDropdown.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
    });
    
    hamburgerDropdown.addEventListener('mouseleave', function() {
        timeoutId = setTimeout(() => {
            hamburgerMenu.classList.remove('open');
        }, 300);
    });
    
    // Close menu when clicking a menu item
    const menuItems = hamburgerDropdown.querySelectorAll('.dropdown-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburgerMenu.classList.remove('open');
        });
    });
    
    console.log('✅ Hamburger menu initialized with 3 items (Editor, Shop, Info)');
}

// ============== SLIDESHOW HELPER FUNCTIONS ==============
function prevSlide() {
    const slideshow = document.querySelector('.slideshow-container');
    if (slideshow && slideshow.__component) {
        slideshow.__component.prevSlide();
    }
}

function nextSlide() {
    const slideshow = document.querySelector('.slideshow-container');
    if (slideshow && slideshow.__component) {
        slideshow.__component.nextSlide();
    }
}

function goToSlide(index) {
    const slideshow = document.querySelector('.slideshow-container');
    if (slideshow && slideshow.__component) {
        slideshow.__component.goToSlide(index);
    }
}

function toggleSlideshowPause() {
    const slideshow = document.querySelector('.slideshow-container');
    if (slideshow && slideshow.__component) {
        slideshow.__component.togglePause();
    }
}

function openProductPage(productType) {
    navigateTo('product-page');
    setTimeout(() => {
        loadProductDetails(productType);
    }, 100);
}

function closeWelcomePopup() {
    const overlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('welcomePopup');
    if (overlay) overlay.remove();
    if (popup) popup.remove();
}

// ============== SIMPLE WORKING FIX - REPLACE EVERYTHING FROM HERE ==============

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    setTimeout(() => {
        if (typeof Slideshow === 'function' && !window.slideshowInitialized) {
            window.slideshow = new Slideshow();
            window.slideshowInitialized = true;
            console.log('✅ Slideshow initialized');
        }
    }, 500);
    
    // Make slides clickable
    setTimeout(makeSlidesClickable, 1500);
    
    // Setup hamburger menu
    setupSimpleHamburger();
});

// Simple hamburger menu that works
function setupSimpleHamburger() {
    const menu = document.getElementById('hamburgerMenu');
    const icon = document.querySelector('.hamburger-icon');
    
    if (icon) {
        icon.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            menu.classList.toggle('open');
        };
        
        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target)) {
                menu.classList.remove('open');
            }
        });
    }
}

// Make slides clickable
function makeSlidesClickable() {
    const slides = document.querySelectorAll('.slide-card');
    const products = ['photocards', 'calendar', 'photobook', 'canvas', 'mousepads', 'doublecards'];
    
    slides.forEach((slide, i) => {
        slide.onclick = function(e) {
            e.preventDefault();
            navigateTo('product-page');
            setTimeout(() => {
                if (typeof loadProductDetails === 'function') {
                    loadProductDetails(products[i % products.length]);
                }
            }, 100);
        };
        slide.style.cursor = 'pointer';
    });
}

// ============== WORKING FIX FOR OPEN IN EDITOR ==============
(function fixOpenInEditor() {
    console.log('🔧 Setting up Open in Editor button...');
    
    function attachEditorListener() {
        const editorBtn = document.getElementById('openEditorBtn');
        
        if (editorBtn) {
            console.log('✅ Found Open in Editor button');
            
            // Remove any existing listeners by cloning
            const newBtn = editorBtn.cloneNode(true);
            editorBtn.parentNode.replaceChild(newBtn, editorBtn);
            
            // Add working click listener
            newBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('🎯 OPEN IN EDITOR CLICKED!');
                
                // Get product type from data attribute
                const productType = this.getAttribute('data-product') || 'photocards';
                console.log('📦 Product type:', productType);
                
                // Navigate to photos page
                navigateTo('photos');
                
                // Wait for photos page to load
                setTimeout(() => {
                    console.log('📸 Photos page loaded, selecting product...');
                    
                    // Method 1: Use selectProduct function
                    if (typeof selectProduct === 'function') {
                        selectProduct(productType);
                        console.log('✅ selectProduct called with:', productType);
                    }
                    
                    // Method 2: Update the badge
                    const badge = document.getElementById('currentProductBadge');
                    if (badge) {
                        const icons = {
                            'photocards': '🖼️',
                            'calendar': '📅', 
                            'photobook': '📘',
                            'canvas': '🖼️',
                            'mousepads': '🖱️',
                            'doublecards': '🃏'
                        };
                        const names = {
                            'photocards': 'Photo Cards',
                            'calendar': 'Calendar',
                            'photobook': 'Photo Book',
                            'canvas': 'Canvas',
                            'mousepads': 'Mouse Pads',
                            'doublecards': 'Double Cards'
                        };
                        badge.innerHTML = `<span class="badge-text">${icons[productType] || '📷'} ${names[productType] || productType}</span>`;
                    }
                    
                    // Method 3: Update print options
                    if (typeof updatePrintOptions === 'function') {
                        updatePrintOptions(productType);
                    }
                    
                }, 800);
                
                return false;
            });
            
            console.log('✅ Open in Editor button is now working!');
            return true;
        }
        return false;
    }
    
    // Try immediately
    if (!attachEditorListener()) {
        // If button not found, wait for it
        console.log('⏳ Waiting for Open in Editor button...');
        const observer = new MutationObserver(function(mutations) {
            if (document.getElementById('openEditorBtn')) {
                if (attachEditorListener()) {
                    observer.disconnect();
                }
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        // Also try after 2 seconds
        setTimeout(attachEditorListener, 2000);
    }
})();

// ============== EDITOR WELCOME POPUP FUNCTIONS ==============
function showEditorWelcome(productType) {
    const popup = document.getElementById('editorWelcomePopup');
    if (!popup) {
        console.error('Editor welcome popup not found');
        return;
    }
    
    // Update product name
    const productNames = {
        'photocards': 'Photo Cards',
        'calendar': 'Calendar',
        'photobook': 'Photo Book',
        'canvas': 'Canvas',
        'mousepads': 'Mouse Pads',
        'doublecards': 'Double Cards'
    };
    
    const nameEl = document.getElementById('welcomeProductName');
    if (nameEl) {
        nameEl.textContent = productNames[productType] || 'Photo Cards';
    }
    
    // Show popup
    popup.style.display = 'flex';
    
    // Auto-hide after 8 seconds
    setTimeout(() => {
        if (popup.style.display === 'flex') {
            popup.style.display = 'none';
        }
    }, 8000);
}

function closeEditorWelcome() {
    const popup = document.getElementById('editorWelcomePopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// ============== SHOW WELCOME FOR BOTH WAYS ==============
(function setupEditorWelcome() {
    console.log('🔧 Setting up editor welcome popup...');
    
    // Way 1: Through slideshow (already have this in your code)
    // Make sure your openEditorBtn click handler calls showEditorWelcome
    
    // Way 2: Through hamburger menu
    document.addEventListener('click', function(e) {
        // Check if clicked on Editor in hamburger menu
        const isHamburgerEditor = e.target.closest('.hamburger-dropdown') && 
                                  (e.target.textContent.includes('Editor') || 
                                   e.target.closest('[onclick*="photos"]'));
        
        if (isHamburgerEditor) {
            console.log('📸 Editor opened via hamburger menu');
            
            // Wait for editor page to load
            setTimeout(() => {
                const photosPage = document.getElementById('photos');
                if (photosPage && photosPage.classList.contains('active')) {
                    // Get current product (default to photocards)
                    let currentProduct = 'photocards';
                    
                    // Try to get from active dropdown
                    const activeItem = document.querySelector('.dropdown-item.active');
                    if (activeItem) {
                        currentProduct = activeItem.getAttribute('data-product') || 'photocards';
                    }
                    
                    showEditorWelcome(currentProduct);
                }
            }, 1000);
        }
    });
    
    console.log('✅ Editor welcome popup ready for both entry methods');
})();


// ============== ULTIMATE DROPDOWN FIX ==============
(function ultimateDropdownFix() {
    console.log('🔧 Applying ultimate dropdown fix...');
    
    // Function to fix dropdown
    function fixDropdown() {
        const btn = document.getElementById('productDropdownBtn');
        const menu = document.getElementById('productDropdownMenu');
        
        if (btn && menu) {
            console.log('✅ Found dropdown elements, attaching handler...');
            
            // Remove all existing handlers by cloning
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            // Attach new handler directly
            newBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                menu.classList.toggle('show');
                console.log('Dropdown toggled:', menu.classList.contains('show'));
                return false;
            };
            
            // Close when clicking outside
            document.addEventListener('click', function(e) {
                if (!menu.contains(e.target) && !newBtn.contains(e.target)) {
                    menu.classList.remove('show');
                }
            });
            
            return true;
        }
        return false;
    }
    
    // Try multiple times
    let attempts = 0;
    const interval = setInterval(function() {
        attempts++;
        if (fixDropdown() || attempts > 10) {
            clearInterval(interval);
            console.log('✅ Dropdown fix completed after', attempts, 'attempts');
        }
    }, 500);
})();
// Make functions global
window.showEditorWelcome = showEditorWelcome;
window.closeEditorWelcome = closeEditorWelcome;

// Keep all your existing global functions
window.prevSlide = function() { if (window.slideshow) window.slideshow.prevSlide(); };
window.nextSlide = function() { if (window.slideshow) window.slideshow.nextSlide(); };
window.goToSlide = function(i) { if (window.slideshow) window.slideshow.goToSlide(i); };
window.toggleSlideshowPause = function() { if (window.slideshow) window.slideshow.togglePause(); };
window.openProductPage = openProductPage;
window.closeWelcomePopup = closeWelcomePopup;
window.renderCartPage = renderCartPage;
window.updateCartItemQuantityFromCart = updateCartItemQuantityFromCart;
window.processOrderFromCart = processOrderFromCart;
window.deleteSelectedItems = deleteSelectedItems;
window.forceCartUpdate = forceCartUpdate;
window.updateCartHover = updateCartHover;
window.selectAllItems = selectAllItems;
window.showPhotoPreview = showPhotoPreview;
window.closePhotoPreview = closePhotoPreview;
window.prevPreviewPhoto = prevPreviewPhoto;
window.nextPreviewPhoto = nextPreviewPhoto;
window.jumpToPreviewPhoto = jumpToPreviewPhoto;
window.updateQuantity = updateQuantity;
window.calculatePrice = calculatePrice;
window.onSizeSelect = onSizeSelect;
window.changeUnit = changeUnit;

















