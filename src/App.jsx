/// <summary>
/// ================================================================
/// Title         : EF Fix Parser 
/// NameSpace     :
/// Author        : Asif Zaman
/// Purpose       : Parse the EF Fix message and display the parsed data
/// Creation date : 26-Feb-2025
/// =================================================================
/// Modification History
/// Author        Date      Description of change
/// ------------------------------------------------------------------
/// Asif Zaman  26-Feb-2025 Project design and structure
/// Asif Zaman  27-Feb-2025 Created FixMapping file to map the fix tags with the fieldnames as per the DSE X=stream FIX specification
/// Asif Zaman  28-Feb-2025 [FEATURE] Created ParseContext file to create the context for the parsed data
/// Asif Zaman  01-Mar-2025 [FEATURE] ParseSection file to display the parsed data
/// Asif Zaman  03-Mar-2025 [FEATURE] New Order mapping
/// Asif Zaman  04-Mar-2025 [FEATURE] Order Cancel mapping
/// Asif Zaman  05-Mar-2025 [FEATURE] Order Replace mapping

/// Asif Zaman  02-Mar-2025 [FEATURE] Standard Header mapping
/// Asif Zaman  05-Mar-2025 [FEATURE] Standard Trailer mapping

/// ==================================================================
/// </summary>



import React from 'react';
import Navbar from './components/Navbar';
import { ParseProvider } from './context/ParseContext';
import InputSection from './components/InputSection';
import ParseSection from './components/ParseSection';

const App = () => {
  return (
    <ParseProvider>
      <Navbar />
      <InputSection />
      <ParseSection />
    </ParseProvider>
  );
};

export default App;