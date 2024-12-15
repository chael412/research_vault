<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thesis Print</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 0;
        }

        /* Center the table on the page */
        .table-container {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        table {
            width: 100%;
            max-width: 1200px;
            /* Set a maximum width */
            border-collapse: collapse;
            margin-top: 20px;
        }

        /* Apply border to both th and td */
        table th,
        table td {
            border: 1px solid #052e16;
            padding: 8px;
            text-align: left;
            font-size: 14px;
            /* Set default font size for all table content */
        }

        /* Make header background green */
        table th {
            background-color: #15803d;
            color: white;
        }

        /* Optional styling for table text */
        h2 {
            text-align: center;
        }

        /* Control text size for table content */
        .table-text {
            font-size: 10px;
            /* Set specific font size for the table rows */
        }

        .thead-text {
            white-space: nowrap;
            font-size: 13px;
            /* Set font size for header */
        }

        /* Ensure borders for tbody td */
        tbody td {
            border: 1px solid #052e16;
        }
    </style>
</head>

<body>

    <h2>Thesis Materials</h2>

    <!-- Table container to center the table -->
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th class="thead-text">Accession No</th>
                    <th class="thead-text">Author</th>
                    <th class="thead-text">Title</th>
                    <th class="thead-text">Year</th>
                    <th class="thead-text">Copies</th>
                    <th class="thead-text">Course</th>
                    <th class="thead-text">Date Process</th>
                    <th class="thead-text">Page Number</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $i = 1;
                @endphp
                @foreach ($thesis as $item)
                    <tr class="table-text">
                        <td>{{ $i++ }}</td>
                        <td>{{ $item->accession_no }}</td>
                        <td>{{ $item->author->lastname }}, {{ $item->author->firstname }}
                            {{ $item->author->middlename ?? 'N/A' }}</td>
                        <td>{{ $item->title }}</td>
                        <td>{{ $item->year }}</td>
                        <td>{{ $item->copies }}</td>
                        <td>{{ $item->course->acronym }}</td>
                        <td>{{ $item->date_process ?? '' }}</td>
                        <td>{{ $item->page_number ?? '' }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

</body>

</html>
