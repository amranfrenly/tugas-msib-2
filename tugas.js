<script>
    let s1 = {
        "nama": "Andi",
        nilai: 80
    };
    let s2 = {
        "nama": "Ali",
        nilai: 90
    };
    let s3 = {
        "nama": "Aji",
        nilai: 70
    };
    let s4 = {
        "nama": "Ani",
        nilai: 90
    };
    let s5 = {
        "nama": "Ando",
        nilai: 85
    };

    let siswa = [s1, s2, s3, s4, s5];
</script>

<table border="1" cellspacing="0" cellpadding="10" style="padding: 10 ; text-align: center; width: 100%;">
    <thead bgcolor="lavender">
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Nilai</th>
            <th>keterangan</th>
            <th>Grade</th>
            <th>Predikat</th>
        </tr>
    </thead>
    <tbody>
        <script>
            let no = 1;
            let warna;
            for (const s of siswa) {
                warna = (no % 2 == 0) ? 'silver' : 'white';
                //ternary
                var ket = (s.nilai >= 60) ? "lulus" : "gagal";
                let grade = "";
                let predikat = "";
                //if multikondisi
                if (s.nilai > 85 && s.nilai <= 100) grade = "A";
                else if (s.nilai > 75 && s.nilai <= 85) grade = "B";
                else if (s.nilai >= 60 && s.nilai <= 75) grade = "C";
                else if (s.nilai > 30 && s.nilai < 60) grade = "D";
                else if (s.nilai >= 0 && s.nilai <= 30) grade = "E";
                else grade = "";

                switch (grade) {
                    case "A":
                        predikat = "Sempurna";
                        break;
                    case "B":
                        predikat = "Baik";
                        break;
                    case "C":
                        predikat = "Cukup";
                        break;
                    case "D":
                        predikat = "Kurang";
                        break;
                    case "E":
                        predikat = "Buruk";
                        break;
                    default:
                        predikat = "";
                        break;
                }

                document.write(`<tr bgcolor="${warna}">
                    <td>${no}</td>
                    <td>${s.nama}</td>
                    <td>${s.nilai}</td>
                    <td>${ket}</td>
                    <td>${grade}</td>
                    <td>${predikat}</td>
                    </tr>`);
                no++; //increment nilai no
            }
        </script>
    </tbody>
</table>